package com.tietoevry.backend.mapper.page;

import java.util.List;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.mapper.section.SectionMapper;
import com.tietoevry.backend.model.page.Page;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class PageMapper {

    public static Page toPage(PageEntity page) {
        return Page.builder()
            .id(page.getPageId())
            .title(page.getTitle())
            .type(page.getType())
            .sections(SectionMapper.toSections(page.getSections()))
            .build();
    }

    public static List<Page> toPages(List<PageEntity> pageEntities) {
        if (pageEntities == null) {
            return null;
        }
        return pageEntities.stream()
            .map(PageMapper::toPage)
            .toList();
    }
}
