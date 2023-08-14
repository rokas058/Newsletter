package com.tietoevry.backend.model.recommendation;

import com.tietoevry.backend.database.entity.MediaType;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateRecommendationForm {
    @NotNull
    String title;
    @NotNull
    Long newsletterId;
    @NotNull
    MediaType mediaType;
}
