package com.tietoevry.backend.service;

import com.tietoevry.backend.exceptions.MovieNotFoundException;
import com.tietoevry.backend.model.movie.OmdbMovie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OmdbApiService {
    @Value("${omdb.url}")
    private String apiUrl;
    @Value("${omdb.api.key}")
    private String apiKey;

    public OmdbMovie searchMovieByName(String name) {
        RestTemplate restTemplate = new RestTemplate();
        String url = apiUrl + "?apikey=" + apiKey + "&t=" + name;
        OmdbMovie movie = restTemplate.exchange(url, HttpMethod.GET, null, OmdbMovie.class).getBody();

        if (movie != null) {
            setMovieLink(movie);
        }
        return movie;
    }

    public OmdbMovie getMovieById(String movieId) {
        RestTemplate restTemplate = new RestTemplate();
        String url = apiUrl + "?apikey=" + apiKey + "&i=" + movieId;

        OmdbMovie movie = restTemplate.exchange(url, HttpMethod.GET, null, OmdbMovie.class).getBody();

        if (movie != null) {
            setMovieLink(movie);
        }

        return movie;
    }

    public void setMovieLink(OmdbMovie movie) {
        movie.setLink("https://www.imdb.com/title/" + movie.getId());
    }

    private void validateMovieData(OmdbMovie movie) {
        if (movie == null || movie.getId() == null) {
            throw new MovieNotFoundException("The movie data is incomplete or the ID is null.");
        }
    }
}

