package com.backend.model.page;

import java.util.List;

import com.backend.database.entity.Type;
import com.backend.model.section.Section;
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
    List<Section> sections;
}
