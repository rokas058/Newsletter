package com.tietoevry.backend.mapper.event;

import com.tietoevry.backend.database.entity.EventEntity;
import com.tietoevry.backend.database.entity.EventType;
import com.tietoevry.backend.model.event.EventForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EventFormMapper {

    public static EventEntity toEventEntity(EventForm event, EventType eventType) {
        return EventEntity.builder()
            .title(event.getTitle())
            .startDate(event.getStartDate())
            .endDate(event.getEndDate())
            .eventType(eventType)
            .build();
    }
}
