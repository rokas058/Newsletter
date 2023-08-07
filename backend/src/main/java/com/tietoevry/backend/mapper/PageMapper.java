package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.model.Page;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class PageMapper {

    public static Page toPage(PageEntity page) {
        return Page.builder()
            .id(page.getPageId())
            .title(page.getTitle())
            .type(page.getType())
            .build();
    }
}
