package com.tietoevry.backend.model;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class Section {
    @NotNull
    Long id;
    String title;
    String text;
    byte[] image;
}
