package com.tietoevry.backend.mapper.section;

import java.util.ArrayList;
import java.util.List;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.section.CreateSectionForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreateSectionFormMapper {

    public static SectionEntity toSectionEntity(CreateSectionForm section) {
        List<ImageEntity> imageEntities = new ArrayList<>();

        if (section.getImages() != null) {
            for (byte[] imageData : section.getImages()) {
                ImageEntity imageEntity = new ImageEntity();
                imageEntity.setImage(imageData);
                imageEntities.add(imageEntity);
            }
        }

        return SectionEntity.builder()
            .title(section.getTitle())
            .text(section.getText())
            .images(imageEntities)
            .build();
    }
}

