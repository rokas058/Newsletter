package com.tietoevry.backend.mapper.image;

import static com.tietoevry.backend.utils.ImageFileUtil.toBytes;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.model.image.CreateImageForm;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreateImageFormMapper {

    public static ImageEntity toImageEntity(CreateImageForm image) {
        return ImageEntity.builder()
            .image(image.getImage())
            .build();
    }

    public static CreateImageForm toCreateImageForm(MultipartFile imageFile) {
        return CreateImageForm.builder()
            .image(toBytes(imageFile))
            .build();
    }
}
