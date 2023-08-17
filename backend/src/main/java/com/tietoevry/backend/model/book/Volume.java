package com.tietoevry.backend.model.book;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class Volume {

    private String id;

    private String selfLink;
    private VolumeInfo volumeInfo;

}
