package com.backend.model.event;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EventForm {
    @NotNull
    String title;
    @NotNull
    LocalDate startDate;
    @NotNull
    LocalDate endDate;
}
