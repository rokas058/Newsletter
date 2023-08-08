package com.tietoevry.backend.model;

import java.util.Date;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateNewsletterForm {
    @NotNull
    String title;
    @NotNull
    Date publishDate;
    @NotNull
    Boolean isPublished;


}
