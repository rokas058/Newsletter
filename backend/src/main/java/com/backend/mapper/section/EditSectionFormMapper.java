package com.tietoevry.backend.mapper.section;

import java.util.List;

import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.section.EditSectionForm;

public class EditSectionFormMapper {
    public static SectionEntity toSectionEntity(Long id, EditSectionForm section) {
        return SectionEntity.builder()
            .sectionId(id)
            .title(section.getTitle())
            .text(section.getText())
            .build();
    }

    public static EditSectionForm toEditSectionForm(String title, String text,
                                                    List<byte[]> imageBytesList) {
        return EditSectionForm.builder()
            .title(title)
            .text(text)
            .images(imageBytesList)
            .build();
    }
}
