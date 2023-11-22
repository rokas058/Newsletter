package com.backend.mapper.image;

import com.backend.database.entity.ImageEntity;
import com.backend.model.image.CreateImageForm;
import com.backend.utils.ImageFileUtil;
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
            .image(ImageFileUtil.toBytes(imageFile))
            .build();
    }
}
