package com.tietoevry.backend.model.newsletter;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EditNewsletterForm {
    @NotNull
    String title;
    @NotNull
    LocalDate publishDate;
    @NotNull
    Boolean isPublished;
}
