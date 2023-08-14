package com.tietoevry.backend.model.newsletter;

import java.time.LocalDate;
import java.util.List;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.database.entity.RecommendationEntity;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class Newsletter {
    @NotNull
    Long id;
    @NotNull
    String title;
    @NotNull
    LocalDate publishDate;
    @NotNull
    Boolean isPublished;
    List<PageEntity> pages;
    List<RecommendationEntity> recommendations;
}
