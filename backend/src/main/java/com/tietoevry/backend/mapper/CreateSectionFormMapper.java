package com.tietoevry.backend.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.CreateSectionForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreateSectionFormMapper {

    public static SectionEntity toSectionEntity(CreateSectionForm section) {
        SectionEntity sectionEntity = SectionEntity.builder()
            .title(section.getTitle())
            .text(section.getText())
            .build();

        List<ImageEntity> imageEntities = null;
        if (section.getImages() != null) {
            imageEntities = section.getImages().stream()
                .map(imageData -> convertToImageEntity(imageData, sectionEntity))
                .collect(Collectors.toList());
        }
        sectionEntity.setImages(imageEntities);

        return sectionEntity;
    }


    public static ImageEntity convertToImageEntity(byte[] imageData, SectionEntity section) {
        ImageEntity imageEntity = new ImageEntity();
        imageEntity.setImage(imageData);
        imageEntity.setSection(section);
        return imageEntity;
    }

}
