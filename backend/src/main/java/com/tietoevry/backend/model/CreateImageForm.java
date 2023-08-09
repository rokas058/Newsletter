package com.tietoevry.backend.model;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateImageForm {
    @NotNull
    Long sectionId;
    @NotNull
    byte[] image;
}
