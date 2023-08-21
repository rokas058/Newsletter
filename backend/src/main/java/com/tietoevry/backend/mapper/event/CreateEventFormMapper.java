package com.tietoevry.backend.mapper.event;

import com.tietoevry.backend.database.entity.EventEntity;
import com.tietoevry.backend.database.entity.EventType;
import com.tietoevry.backend.model.event.CreateEventForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CreateEventFormMapper {

    public static EventEntity toEventEntity(CreateEventForm event, EventType eventType) {
        return EventEntity.builder()
            .title(event.getTitle())
            .startDate(event.getStartDate())
            .endDate(event.getEndDate())
            .eventType(eventType)
            .build();
    }
}
