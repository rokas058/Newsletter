package com.tietoevry.backend.service;

import com.tietoevry.backend.database.entity.EventEntity;
import com.tietoevry.backend.database.entity.EventType;
import com.tietoevry.backend.database.repository.EventRepository;
import com.tietoevry.backend.mapper.event.CreateEventFormMapper;
import com.tietoevry.backend.mapper.event.EventMapper;
import com.tietoevry.backend.model.event.CreateEventForm;
import com.tietoevry.backend.model.event.Event;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EventService {
    private final EventRepository eventRepository;

    public Event createEvent(CreateEventForm createEventForm) {
        EventType eventType = EventType.OTHER;
        EventEntity eventToCreate = CreateEventFormMapper.toEventEntity(createEventForm, eventType);
        EventEntity createdEvent = eventRepository.save(eventToCreate);

        return EventMapper.toEvent(createdEvent);
    }
}
