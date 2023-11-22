package com.tietoevry.backend.model.section;

import java.util.List;

import com.tietoevry.backend.model.image.Image;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class Section {
    @NotNull
    Long id;
    String title;
    String text;
    List<Image> images;
}
