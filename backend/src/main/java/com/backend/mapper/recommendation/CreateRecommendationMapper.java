package com.backend.mapper.recommendation;

import com.backend.model.recommendation.CreateRecommendationForm;
import com.backend.database.entity.RecommendationEntity;
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
