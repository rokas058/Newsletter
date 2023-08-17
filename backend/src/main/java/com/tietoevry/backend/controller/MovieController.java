package com.tietoevry.backend.controller;

import com.tietoevry.backend.model.movie.OmdbMovie;
import com.tietoevry.backend.service.OmdbApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MovieController {

    private final OmdbApiService omdbApiService;

    @GetMapping("/movie")
    public OmdbMovie getMovie(@RequestParam String name) {
        return omdbApiService.searchMovieByName(name);
    }

    @GetMapping("/movie/{movieId}")
    public OmdbMovie getMovieById(@RequestParam String movieId) {
        return omdbApiService.getMovieById(movieId);
    }

}
