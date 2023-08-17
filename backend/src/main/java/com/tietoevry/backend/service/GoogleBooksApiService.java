package com.tietoevry.backend.service;

import java.util.Optional;

import com.tietoevry.backend.exceptions.ExternalServiceException;
import com.tietoevry.backend.model.book.GoogleVolumes;
import com.tietoevry.backend.model.book.Volume;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleBooksApiService {
    private static final String BASE_URL = "https://www.googleapis.com/books/v1/volumes";

    @Value("${google.api.key}")
    private String apiKey;

    public Optional<Volume> findBookByTitle(String title) {
        RestTemplate restTemplate = new RestTemplate();
        String url = BASE_URL + "?q=intitle:" + title + "&orderBy=relevance&maxResults=1&startIndex=0&key=" + apiKey;
        GoogleVolumes googleVolumes = restTemplate.exchange(url, HttpMethod.GET, null, GoogleVolumes.class).getBody();
        assert googleVolumes != null;
        return Optional.ofNullable(googleVolumes.getItems().stream().findFirst()
            .orElseThrow(() -> new ExternalServiceException("External service error while fetching by title")));
    }

    public Volume getBookById(String bookId) {
        RestTemplate restTemplate = new RestTemplate();

        String url = BASE_URL + "/" + bookId + "?key=" + apiKey;

        return restTemplate.exchange(url, HttpMethod.GET, null, Volume.class).getBody();
    }

}
