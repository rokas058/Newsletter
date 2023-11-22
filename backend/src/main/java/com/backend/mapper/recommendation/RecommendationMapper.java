package com.tietoevry.backend.mapper.recommendation;

import java.util.List;

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
            .apiId(recommendation.getApiId())
            .build();
    }

    public static List<Recommendation> toRecommendations(List<RecommendationEntity> recommendationEntities) {
        if (recommendationEntities == null) {
            return null;
        }

        return recommendationEntities.stream()
            .map(RecommendationMapper::toRecommendation)
            .toList();
    }
}
