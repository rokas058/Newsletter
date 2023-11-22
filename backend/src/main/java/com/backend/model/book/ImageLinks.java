package com.backend.model.book;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class ImageLinks {
    //private String smallThumbnail;
    private String thumbnail;

}
