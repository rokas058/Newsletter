package com.backend.model.newsletter;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateNewsletterForm {
    @NotNull
    String title;
    @NotNull
    LocalDate publishDate;
    @NotNull
    Boolean isPublished;


}
