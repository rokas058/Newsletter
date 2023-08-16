package com.tietoevry.backend.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleBooksClient {
    private static final String BASE_URL = "https://www.googleapis.com/books/v1/volumes";

    @Value("${google.api.key}")
    private String apiKey;

    public String findBookByTitle(String title) {
        RestTemplate restTemplate = new RestTemplate();

        String url = BASE_URL + "?q=intitle:" + title + "&orderBy=relevance&maxResults=1&startIndex=0&key=" + apiKey;

        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        return response.getBody();
    }

    public String getBookById(String bookId) {
        RestTemplate restTemplate = new RestTemplate();

        String url = BASE_URL + "/" + bookId + "?key=" + apiKey;

        return restTemplate.getForObject(url, String.class);
    }

}
