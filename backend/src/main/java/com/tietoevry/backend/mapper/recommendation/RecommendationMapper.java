package com.tietoevry.backend.mapper.recommendation;

import com.tietoevry.backend.database.entity.RecommendationEntity;
import com.tietoevry.backend.model.recommendation.Recommendation;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class RecommendationMapper {

    public static Recommendation toRecommendation(RecommendationEntity recommendation) {
        return Recommendation.builder()
            .id(recommendation.getRecommendationsId())
            .title(recommendation.getTitle())
            .mediaType(recommendation.getMediaType())
            .build();
    }
}
