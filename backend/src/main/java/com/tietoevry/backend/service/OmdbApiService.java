package com.tietoevry.backend.service;

import com.tietoevry.backend.exceptions.ExternalServiceException;
import com.tietoevry.backend.exceptions.MovieNotFoundException;
import com.tietoevry.backend.model.movie.OmdbMovie;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

@Service
public class OmdbApiService {
    private WebClient webClient;
    @Value("${omdb.url}")
    private String apiUrl;
    @Value("${omdb.api.key}")
    private String apiKey;

    @PostConstruct
    public void init() {
        this.webClient = WebClient.builder().baseUrl(apiUrl).build();
    }

    public OmdbMovie searchMovieByName(String name) {
        try {
            OmdbMovie movie = webClient.get()
                .uri(uriBuilder -> uriBuilder
                    .queryParam("apikey", apiKey)
                    .queryParam("t", name)
                    .build())
                .retrieve()
                .bodyToMono(OmdbMovie.class)
                .block();

            validateMovieData(movie);
            return movie;
        } catch (WebClientResponseException e) {
            throw new ExternalServiceException("External service error while fetching by name");
        }
    }

    public OmdbMovie getMovieById(String movieId) {
        try {
            OmdbMovie movie = webClient.get()
                .uri(uriBuilder -> uriBuilder
                    .queryParam("apikey", apiKey)
                    .queryParam("i", movieId)
                    .build())
                .retrieve()
                .bodyToMono(OmdbMovie.class)
                .block();

            validateMovieData(movie);

            return movie;
        } catch (WebClientResponseException.NotFound e) {
            throw new MovieNotFoundException("Movie ID " + movieId + " not found");
        } catch (WebClientResponseException e) {
            throw new ExternalServiceException("External service error while fetching by ID");
        }
    }

    public void setMoiveLink(OmdbMovie movie) {
        movie.setLink("https://www.imdb.com/title/" + movie.getId());
    }

    private void validateMovieData(OmdbMovie movie) {
        if (movie == null || movie.getId() == null) {
            throw new MovieNotFoundException("The movie data is incomplete or the ID is null.");
        }
    }
}

