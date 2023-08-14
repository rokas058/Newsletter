package com.tietoevry.backend.controller;

import com.tietoevry.backend.model.recommendation.CreateRecommendationForm;
import com.tietoevry.backend.model.recommendation.Recommendation;
import com.tietoevry.backend.service.RecommendationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/api/recommendations")
public class RecommendationController {
    private final RecommendationService recommendationsService;

    @PostMapping
    public Recommendation createRecommendation(@Valid @RequestBody CreateRecommendationForm createRecommendation) {
        return recommendationsService.createRecommendation(createRecommendation);
    }
}
