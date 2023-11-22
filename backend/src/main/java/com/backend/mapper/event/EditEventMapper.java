package com.backend.mapper.event;

import com.backend.database.entity.EventEntity;
import com.backend.model.event.EventForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EditEventMapper {
    public static EventEntity toEventEntity(Long id, EventForm event) {
        return EventEntity.builder()
            .eventId(id)
            .title(event.getTitle())
            .startDate(event.getStartDate())
            .endDate(event.getEndDate())
            .build();
    }
}
