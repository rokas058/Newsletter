package com.backend.model.book;

import java.util.List;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class VolumeInfo {

    private String title;
    private List<String> authors;
    private String description;
    private Double averageRating;
    private ImageLinks imageLinks;
    //private String previewLink;
    //private String infoLink;
    private String canonicalVolumeLink;


}
