package com.tietoevry.backend.model;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateNewsletterForm {
    @NotNull
    String title;
    @NotNull
    LocalDateTime publishDate;
    @NotNull
    Boolean isPublished;


}
