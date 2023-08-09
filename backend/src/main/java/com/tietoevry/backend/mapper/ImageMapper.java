package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.model.Image;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class ImageMapper {
    public static Image toImage(ImageEntity image) {
        return Image.builder()
            .id(image.getImageId())
            .image(image.getImage())
            .build();
    }
}
