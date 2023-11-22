package com.backend.model.movie;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class OmdbMovie {
    @JsonProperty("imdbID")
    private String id;
    private Long entityId;
    @JsonProperty("Title")
    private String title;

    @JsonProperty("Director")
    private String director;

    @JsonProperty("Plot")
    private String plot;

    @JsonProperty("imdbRating")
    private Double imdbRating;

    @JsonProperty("Poster")
    private String poster;

    private String link;
}
