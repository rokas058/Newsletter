package com.tietoevry.backend.model;

import java.time.LocalDateTime;
import java.util.List;

import com.tietoevry.backend.database.entity.PageEntity;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class Newsletter {
    @NotNull
    Long id;
    @NotNull
    LocalDateTime publishDate;
    @NotNull
    Boolean isPublished;
    List<PageEntity> pages;
}
