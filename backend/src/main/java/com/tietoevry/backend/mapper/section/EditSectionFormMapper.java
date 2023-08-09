package com.tietoevry.backend.mapper.section;

import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.section.EditSectionForm;

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
