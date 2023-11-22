package com.backend.mapper.event;

import com.backend.database.entity.EventEntity;
import com.backend.database.entity.EventType;
import com.backend.model.event.CreatedEvent;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CreatedEventMapper {
    public static CreatedEvent toCreatedEvent(EventEntity event) {
        return CreatedEvent.builder()
            .id(event.getEventId())
            .title(event.getTitle())
            .startDate(event.getStartDate())
            .endDate(event.getEndDate())
            .eventType(EventType.OTHER)
            .build();
    }
}
