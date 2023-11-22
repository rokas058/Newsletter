package com.backend.model.newsletter;

import java.time.LocalDate;
import java.util.List;

import com.backend.model.page.Page;
import com.backend.model.recommendation.Recommendation;
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
    List<Page> pages;
    List<Recommendation> recommendations;

}
