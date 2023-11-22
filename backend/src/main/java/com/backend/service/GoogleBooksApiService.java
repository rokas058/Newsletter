package com.backend.service;

import java.util.Optional;

import com.backend.model.book.GoogleVolumes;
import com.backend.model.book.Volume;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleBooksApiService {

    @Value("${google.books.url}")
    private String baseUrl;

    @Value("${google.api.key}")
    private String apiKey;

    public Optional<Volume> getBookByTitle(String title) {
        RestTemplate restTemplate = new RestTemplate();
        String url = baseUrl + "?q=intitle:" + title + "&orderBy=relevance&maxResults=1&startIndex=0&key=" + apiKey;
        GoogleVolumes googleVolumes = restTemplate.exchange(url, HttpMethod.GET, null, GoogleVolumes.class).getBody();

        if (googleVolumes == null || googleVolumes.getItems() == null) {
            return Optional.empty();
        }

        return googleVolumes.getItems().stream().findFirst();
    }

    public Volume getBookById(String bookId) {
        RestTemplate restTemplate = new RestTemplate();

        String url = baseUrl + "/" + bookId + "?key=" + apiKey;

        return restTemplate.exchange(url, HttpMethod.GET, null, Volume.class).getBody();
    }

}
