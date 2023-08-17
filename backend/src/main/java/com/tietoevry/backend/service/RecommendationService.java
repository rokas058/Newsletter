package com.tietoevry.backend.service;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.database.entity.RecommendationEntity;
import com.tietoevry.backend.database.repository.NewsletterRepository;
import com.tietoevry.backend.database.repository.RecommendationRepository;
import com.tietoevry.backend.mapper.recommendation.CreateRecommendationMapper;
import com.tietoevry.backend.mapper.recommendation.RecommendationMapper;
import com.tietoevry.backend.model.recommendation.CreateRecommendationForm;
import com.tietoevry.backend.model.recommendation.Recommendation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecommendationService {
    private final RecommendationRepository recommendationsRepository;
    private final NewsletterRepository newsletterRepository;

    public Recommendation createRecommendation(CreateRecommendationForm createRecommendation) {
        NewsletterEntity newsletter = newsletterRepository.findById(createRecommendation.getNewsletterId())
            .orElseThrow();
        RecommendationEntity recommendation = CreateRecommendationMapper.toRecommendationEntity(createRecommendation);
        recommendation.setNewsletter(newsletter);
        recommendation.setApiId("1");
        RecommendationEntity savedRecommendation = recommendationsRepository.save(recommendation);
        return RecommendationMapper.toRecommendation(
            savedRecommendation
        );
    }

}
