package com.tietoevry.backend.service;

import java.time.LocalDate;
import java.time.Year;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.tietoevry.backend.database.entity.EventEntity;
import com.tietoevry.backend.database.entity.EventType;
import com.tietoevry.backend.database.entity.UserEntity;
import com.tietoevry.backend.database.repository.EventRepository;
import com.tietoevry.backend.database.repository.UserRepository;
import com.tietoevry.backend.exceptions.EventNotFoundException;
import com.tietoevry.backend.mapper.event.EditEventMapper;
import com.tietoevry.backend.mapper.event.EventFormMapper;
import com.tietoevry.backend.mapper.event.EventMapper;
import com.tietoevry.backend.model.event.Event;
import com.tietoevry.backend.model.event.EventForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EventService {
    private final EventRepository eventRepository;

    private final UserRepository userRepository;

    public Event createEvent(EventForm eventForm) {
        EventType eventType = EventType.OTHER;
        EventEntity eventToCreate = EventFormMapper.toEventEntity(eventForm, eventType);
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

        int dateNow = Integer.parseInt(dateNow());

        return usersConfirm.stream()
            .map(user -> EventMapper.toEvent(
                user.getFirstName() + " " + user.getLastName(), user.getBirthday().withYear(dateNow),
                EventType.BIRTHDAY))
            .toList();

    }

    private List<Event> getAllHolidays() {
        String yearValue = dateNow();
        List<String> titles =
            List.of("Naujieji metai", "Lietuvos Valstybės atkūrimo diena", "Nepriklausomybės atkūrimo diena",
                "Tarptautinė darbo diena", "Joninės", "Karaliaus Mindaugo karūnavimo diena", "Žolinė",
                "Visų šventųjų diena", " Vėlinės", "Šv. Kūčios", "Šv. Kalėdos", "Šv. Kalėdų antroji diena");
        List<String> dates = List.of("2018-01-01", "2018-02-16", "2018-03-11", "2018-05-01", "2018-06-24", "2018-07-06",
            "2018-08-15", "2018-11-01", "2018-11-02", "2018-12-24", "2018-12-25", "2018-12-26");
        List<String> updatedDates = dates.stream()
            .map(date -> date.replace("2018", yearValue))
            .toList();

        List<LocalDate> localDates = toDates(updatedDates);

        return IntStream.range(0, titles.size())
            .mapToObj(i -> EventMapper.toEvent(titles.get(i), localDates.get(i), EventType.HOLIDAY))
            .collect(Collectors.toList());
    }

    private List<LocalDate> toDates(List<String> dates) {
        return dates.stream()
            .map(LocalDate::parse)
            .collect(Collectors.toList());
    }

    private String dateNow() {
        Year currentYear = Year.now();
        return String.valueOf(currentYear.getValue());
    }

    public List<Event> getEvents() {
        List<EventEntity> eventEntities = eventRepository.findAll();

        return eventEntities.stream()
            .map(EventMapper::toEvent)
            .toList();
    }

    public Event getEvent(Long id) {
        return eventRepository.findById(id)
            .map(EventMapper::toEvent)
            .orElseThrow(() -> new EventNotFoundException(String.format("Event with id %d does not exist.", id)));
    }

    public Event editEvent(Long id, EventForm eventForm) {
        eventRepository.findById(id)
            .orElseThrow(() -> new EventNotFoundException(String.format("Event with id %d does not exist.", id)));

        EventEntity eventEntity = EditEventMapper.toEventEntity(id, eventForm, EventType.OTHER);
        EventEntity eventEntity1 = eventRepository.save(eventEntity);
        return EventMapper.toEvent(eventEntity1);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
