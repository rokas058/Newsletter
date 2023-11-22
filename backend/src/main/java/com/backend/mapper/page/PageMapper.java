package com.backend.mapper.page;

import java.util.List;

import com.backend.database.entity.NewsletterEntity;
import com.backend.database.entity.Type;
import com.backend.model.page.Page;
import com.backend.database.entity.PageEntity;
import com.backend.mapper.section.SectionMapper;
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

    public static PageEntity toCreatPage(Type type, String title, NewsletterEntity newsletter) {
        return PageEntity.builder()
            .type(type)
            .title(title)
            .newsletter(newsletter)
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
