package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.EditSectionForm;

public class EditSectionFormMapper {
    public static SectionEntity toSectionEntity(Long id, EditSectionForm section) {
        return SectionEntity.builder()
            .sectionId(id)
            .title(section.getTitle())
            .text(section.getText())
            .image(section.getImage())
            .build();
    }
}
