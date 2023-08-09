package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.CreateSectionForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreateSectionFormMapper {
    public static SectionEntity toSectionEntity(CreateSectionForm section) {
        return SectionEntity.builder()
            .title(section.getTitle())
            .text(section.getText())
            .build();
    }
}
