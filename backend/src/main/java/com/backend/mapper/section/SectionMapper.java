package com.backend.mapper.section;

import java.util.List;

import com.backend.model.section.Section;
import com.backend.database.entity.SectionEntity;
import com.backend.mapper.image.ImageMapper;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class SectionMapper {
    public static Section toSection(SectionEntity section) {
        return Section.builder()
            .id(section.getSectionId())
            .title(section.getTitle())
            .text(section.getText())
            .images(ImageMapper.toImages(section.getImages()))
            .build();
    }

    public static List<Section> toSections(List<SectionEntity> sectionEntities) {
        if (sectionEntities == null) {
            return null;
        }
        return sectionEntities.stream()
            .map(SectionMapper::toSection)
            .toList();
    }
}
