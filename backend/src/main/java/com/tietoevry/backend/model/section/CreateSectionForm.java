package com.tietoevry.backend.model.section;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateSectionForm {
    @NotNull
    Long pageId;
    String title;
    String text;
    byte[] image;
}

