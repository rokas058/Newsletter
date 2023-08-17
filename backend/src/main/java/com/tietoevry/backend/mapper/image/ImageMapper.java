package com.tietoevry.backend.mapper.image;

import java.util.List;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.model.image.Image;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class ImageMapper {
    public static Image toImage(ImageEntity image) {
        return Image.builder()
            .id(image.getImageId())
            .image(image.getImage())
            .build();
    }

    public static List<Image> toImages(List<ImageEntity> imagesEntities) {
        if (imagesEntities == null) {
            return null;
        }
        return imagesEntities.stream()
            .map(ImageMapper::toImage)
            .toList();
    }
}
