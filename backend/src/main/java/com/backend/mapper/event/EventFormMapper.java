package com.backend.mapper.event;

import com.backend.database.entity.EventEntity;
import com.backend.model.event.EventForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EventFormMapper {

    public static EventEntity toEventEntity(EventForm event) {
        return EventEntity.builder()
            .title(event.getTitle())
            .startDate(event.getStartDate())
            .endDate(event.getEndDate())
            .build();
    }
}
