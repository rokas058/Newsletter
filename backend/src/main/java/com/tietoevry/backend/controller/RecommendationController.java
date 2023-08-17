package com.tietoevry.backend.controller;

import java.util.List;

import com.tietoevry.backend.database.entity.MediaType;
import com.tietoevry.backend.model.book.Volume;
import com.tietoevry.backend.model.movie.OmdbMovie;
import com.tietoevry.backend.model.recommendation.CreateRecommendationForm;
import com.tietoevry.backend.service.RecommendationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/api/recommendations")
public class RecommendationController {
    private final RecommendationService recommendationsService;

    @PostMapping
    public ResponseEntity<?> createRecommendation(@Valid @RequestBody CreateRecommendationForm createRecommendation) {
        if (createRecommendation.getMediaType().equals(MediaType.FILM)) {
            OmdbMovie movie = recommendationsService.createRecommendationByMovie(createRecommendation);
            return ResponseEntity.ok(movie);
        }
        if (createRecommendation.getMediaType().equals(MediaType.BOOK)) {
            Volume book = recommendationsService.createRecommendationByBook(createRecommendation);
            return ResponseEntity.ok(book);
        }
        return ResponseEntity.badRequest().build();

    }

    @GetMapping(path = "/films/{newslleterId}")
    public List<OmdbMovie> movies(@PathVariable Long newslleterId) {
        return recommendationsService.getAllMovies(newslleterId);
    }

    @GetMapping(path = "/books/{newslleterId}")
    public List<Volume> books(@PathVariable Long newslleterId) {
        return recommendationsService.getAllBooks(newslleterId);
    }

    @DeleteMapping(path = "/{entityId}")
    public void deleteRecommendation(@PathVariable Long entityId) {
        recommendationsService.deleteRecommendation(entityId);
    }
}
