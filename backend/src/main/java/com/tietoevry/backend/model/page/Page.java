package com.tietoevry.backend.model.page;

import java.util.List;

import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.database.entity.Type;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class Page {
    @NotNull
    Long id;
    @NotNull
    String title;
    @NotNull
    Type type;
    List<SectionEntity> sections;
}
