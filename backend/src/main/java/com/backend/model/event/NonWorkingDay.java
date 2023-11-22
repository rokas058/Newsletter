package com.backend.model.event;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class NonWorkingDay {
    private String date;
    private String name;
}
