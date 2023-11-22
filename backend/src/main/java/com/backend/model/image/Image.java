package com.tietoevry.backend.model.image;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class Image {
    @NotNull
    Long id;
    @NotNull
    byte[] image;

}
