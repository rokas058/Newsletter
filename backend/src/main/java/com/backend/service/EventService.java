package com.backend.service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.backend.database.entity.EventEntity;
import com.backend.database.entity.EventType;
import com.backend.database.entity.UserEntity;
import com.backend.database.repository.EventRepository;
import com.backend.database.repository.UserRepository;
import com.backend.exceptions.EventNotFoundException;
import com.backend.mapper.event.CreatedEventMapper;
import com.backend.mapper.event.EditEventMapper;
import com.backend.mapper.event.EventFormMapper;
import com.backend.mapper.event.EventMapper;
import com.backend.model.event.*;
import com.backend.model.movie.OmdbMovie;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
@Slf4j
public class EventService {
    private final EventRepository eventRepository;

    private final UserRepository userRepository;

    @Value("${event.url}")
    private String apiUrl;


    public Event createEvent(EventForm eventForm) {
        EventEntity eventToCreate = EventFormMapper.toEventEntity(eventForm);
        EventEntity createdEvent = eventRepository.save(eventToCreate);

        return EventMapper.toEvent(createdEvent);
    }

    public List<Event> getAllEvents() {
        List<EventEntity> createdEventsEntity = eventRepository.findAll();
        List<Event> createdEvents = createdEventsEntity.stream()
            .map(EventMapper::toEvent)
            .toList();

        List<Event> getAllHolidays = getAllHolidays();

        List<Event> getAllBirthdays = getAllBirthdays();

        List<Event> allEvents = new ArrayList<>();
        allEvents.addAll(createdEvents);
        allEvents.addAll(getAllHolidays);
        allEvents.addAll(getAllBirthdays);

        return allEvents;
    }

    private List<Event> getAllBirthdays() {
        List<UserEntity> users = userRepository.findAll();
        List<UserEntity> usersConfirm = users.stream()
            .filter(UserEntity::isConfirmBirthday)
            .toList();

        int dateNow = Integer.parseInt(yearNow());

        return usersConfirm.stream()
            .map(user -> EventMapper.toEvent(
                user.getFirstName() + " " + user.getLastName(), user.getBirthday().withYear(dateNow),
                EventType.BIRTHDAY))
            .toList();

    }

    private List<Event> getAllHolidays() {
        RestTemplate restTemplate = new RestTemplate();
        NonWorkingDaysResponse datesResponse = restTemplate.getForObject(apiUrl, NonWorkingDaysResponse.class);

        assert datesResponse != null;
        List<String> names = datesResponse.getNonWorkingDates().stream()
            .map(NonWorkingDay::getName)
            .toList();

        List<String> dateStrings = datesResponse.getNonWorkingDates().stream()
            .map(NonWorkingDay::getDate)
            .toList();

        List<LocalDate> localDates = toDates(dateStrings);

        return IntStream.range(0, names.size())
            .mapToObj(i -> EventMapper.toEvent(names.get(i), localDates.get(i), EventType.HOLIDAY))
            .collect(Collectors.toList());
    }


    private List<LocalDate> toDates(List<String> dates) {
        return dates.stream()
            .map(LocalDate::parse)
            .collect(Collectors.toList());
    }

    private String yearNow() {
        Year currentYear = Year.now();
        return String.valueOf(currentYear.getValue());
    }

    public List<CreatedEvent> getEvents() {
        List<EventEntity> eventEntities = eventRepository.findAll();

        return eventEntities.stream()
            .map(CreatedEventMapper::toCreatedEvent)
            .toList();
    }

    public CreatedEvent getEvent(Long id) {
        return eventRepository.findById(id)
            .map(CreatedEventMapper::toCreatedEvent)
            .orElseThrow(() -> new EventNotFoundException(String.format("Event with id %d does not exist.", id)));
    }

    public Event editEvent(Long id, EventForm eventForm) {
        eventRepository.findById(id)
            .orElseThrow(() -> new EventNotFoundException(String.format("Event with id %d does not exist.", id)));

        EventEntity eventEntity = EditEventMapper.toEventEntity(id, eventForm);
        EventEntity eventEntity1 = eventRepository.save(eventEntity);
        return EventMapper.toEvent(eventEntity1);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
