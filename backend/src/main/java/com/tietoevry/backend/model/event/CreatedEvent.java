package com.tietoevry.backend.model.event;

import java.time.LocalDate;

import com.tietoevry.backend.database.entity.EventType;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreatedEvent {
    @NotNull
    Long id;
    @NotNull
    String title;
    @NotNull
    LocalDate startDate;
    @NotNull
    LocalDate endDate;
    @NotNull
    EventType eventType;
}
