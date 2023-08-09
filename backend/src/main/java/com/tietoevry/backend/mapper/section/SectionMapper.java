package com.tietoevry.backend.mapper.section;

import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.model.section.Section;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class SectionMapper {
    public static Section toSection(SectionEntity section) {
        return Section.builder()
            .id(section.getSectionId())
            .title(section.getTitle())
            .text(section.getText())
            .image(section.getImage())
            .build();
    }
}
