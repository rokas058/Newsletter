package com.backend.model.event;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class NonWorkingDaysResponse {
    private List<NonWorkingDay> nonWorkingDates;
}
