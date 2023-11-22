package com.backend.mapper.section;

import java.util.ArrayList;
import java.util.List;

import com.backend.database.entity.ImageEntity;
import com.backend.model.section.CreateSectionForm;
import com.backend.database.entity.SectionEntity;
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

    public static CreateSectionForm toCreateSectionForm(String title, String text, Long pageId,
                                                        List<byte[]> imageBytesList) {
        return CreateSectionForm.builder()
            .title(title)
            .text(text)
            .pageId(pageId)
            .images(imageBytesList)
            .build();
    }

}

