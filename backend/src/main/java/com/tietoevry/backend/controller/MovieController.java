package com.tietoevry.backend.controller;

import com.tietoevry.backend.api.OmdbClient;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MovieController {

    private final OmdbClient omdbClient;

    @GetMapping("/movie")
    public String getMovie(@RequestParam String name) {
        return omdbClient.searchMovieByName(name);
    }
}
