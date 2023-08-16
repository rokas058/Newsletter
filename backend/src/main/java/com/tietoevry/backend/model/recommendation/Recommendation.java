package com.tietoevry.backend.model.recommendation;

import com.tietoevry.backend.database.entity.MediaType;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class Recommendation {
    @NotNull
    Long id;
    @NotNull
    String title;
    @NotNull
    MediaType mediaType;
    @NotNull
    String apiId;
}
