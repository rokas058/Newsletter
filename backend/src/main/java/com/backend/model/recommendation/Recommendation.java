package com.backend.model.recommendation;

import com.backend.database.entity.MediaType;
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
