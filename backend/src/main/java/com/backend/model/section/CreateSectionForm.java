package com.backend.model.section;

import java.util.List;

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
    List<byte[]> images;
}

