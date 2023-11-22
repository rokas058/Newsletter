package com.backend.controller;

import java.util.List;

import com.backend.database.entity.MediaType;
import com.backend.model.recommendation.CreateRecommendationForm;
import com.backend.model.recommendation.Recommendation;
import com.backend.service.RecommendationService;
import com.backend.model.book.Volume;
import com.backend.model.movie.OmdbMovie;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recommendations")
public class RecommendationController {
    private final RecommendationService recommendationsService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Recommendation createRecommendation(@Valid @RequestBody CreateRecommendationForm createRecommendation) {
        if (createRecommendation.getMediaType().equals(MediaType.FILM)) {
            return recommendationsService.createRecommendationByMovie(createRecommendation);
        }
        if (createRecommendation.getMediaType().equals(MediaType.BOOK)) {
            return recommendationsService.createRecommendationByBook(createRecommendation);
        }
        return null;

    }

    @GetMapping(path = "/films/{newslleterId}")
    public List<OmdbMovie> movies(@PathVariable Long newslleterId) {
        return recommendationsService.getAllMovies(newslleterId);
    }

    @GetMapping(path = "/books/{newslleterId}")
    public List<Volume> books(@PathVariable Long newslleterId) {
        return recommendationsService.getAllBooks(newslleterId);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = "/{entityId}")
    public void deleteRecommendation(@PathVariable Long entityId) {
        recommendationsService.deleteRecommendation(entityId);
    }
}
