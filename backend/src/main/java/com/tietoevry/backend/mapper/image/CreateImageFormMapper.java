package com.tietoevry.backend.mapper.image;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.model.image.CreateImageForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreateImageFormMapper {

    public static ImageEntity toImageEntity(CreateImageForm image) {
        return ImageEntity.builder()
            .image(image.getImage())
            .build();
    }
}
