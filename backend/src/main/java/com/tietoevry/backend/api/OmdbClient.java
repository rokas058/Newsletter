package com.tietoevry.backend.api;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class OmdbClient {
    private WebClient webClient;
    @Value("${omdb.url}")
    private String apiUrl;
    @Value("${omdb.api.key}")
    private String apiKey;

    @PostConstruct
    public void init() {
        this.webClient = WebClient.builder().baseUrl(apiUrl).build();
    }

    public String searchMovieByName(String name) {

        return webClient.get()
            .uri(uriBuilder -> uriBuilder
                .queryParam("apikey", apiKey)
                .queryParam("t", name)
                .build())
            .retrieve()
            .bodyToMono(String.class)
            .block();
    }
}
