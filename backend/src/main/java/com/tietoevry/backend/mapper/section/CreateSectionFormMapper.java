package com.tietoevry.backend.mapper.section;

import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.section.CreateSectionForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreateSectionFormMapper {
    public static SectionEntity toSectionEntity(CreateSectionForm section) {
        return SectionEntity.builder()
            .title(section.getTitle())
            .text(section.getText())
            .image(section.getImage())
            .build();
    }
}
