package com.tietoevry.backend.model;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EditNewsletterForm {
    @NotNull
    LocalDateTime publishDate;
    @NotNull
    Boolean isPublished;
}
