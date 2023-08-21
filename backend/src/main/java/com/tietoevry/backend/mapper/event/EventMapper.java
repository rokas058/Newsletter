package com.tietoevry.backend.mapper.event;

import java.time.LocalDate;

import com.tietoevry.backend.database.entity.EventEntity;
import com.tietoevry.backend.database.entity.EventType;
import com.tietoevry.backend.model.event.Event;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EventMapper {

    public static Event toEvent(EventEntity event) {
        return Event.builder()
            .id(event.getEventId())
            .title(event.getTitle())
            .startDate(event.getStartDate())
            .endDate(event.getEndDate())
            .eventType(event.getEventType())
            .build();
    }

    public static Event toEvent(String title, LocalDate date, EventType type) {
        return Event.builder()
            .id(null)
            .title(title)
            .startDate(date)
            .endDate(date)
            .eventType(type)
            .build();
    }
}
