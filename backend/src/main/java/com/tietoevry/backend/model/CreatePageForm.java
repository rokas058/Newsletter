package com.tietoevry.backend.model;

import com.tietoevry.backend.database.entity.Type;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreatePageForm {
    @NotNull
    String title;
    @NotNull
    long newsletterId;
    @NotNull
    Type type;
}
