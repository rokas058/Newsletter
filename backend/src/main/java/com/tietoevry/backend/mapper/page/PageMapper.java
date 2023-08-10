package com.tietoevry.backend.mapper.page;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.model.page.Page;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class PageMapper {

    public static Page toPage(PageEntity page) {
        return Page.builder()
            .id(page.getPageId())
            .title(page.getTitle())
            .type(page.getType())
            .sections(page.getSections())
            .build();
    }
}
