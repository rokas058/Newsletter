package com.tietoevry.backend.mapper.event;

import com.tietoevry.backend.database.entity.EventEntity;
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
}
