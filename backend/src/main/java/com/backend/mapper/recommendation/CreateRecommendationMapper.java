package com.tietoevry.backend.mapper.recommendation;

import com.tietoevry.backend.database.entity.RecommendationEntity;
import com.tietoevry.backend.model.recommendation.CreateRecommendationForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreateRecommendationMapper {
    public static RecommendationEntity toRecommendationEntity(CreateRecommendationForm recommendation) {
        return RecommendationEntity.builder()
            .title(recommendation.getTitle())
            .mediaType(recommendation.getMediaType())
            .build();
    }
}
