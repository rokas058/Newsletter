package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.model.CreatePageForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = lombok.AccessLevel.PRIVATE)
public class CreatePageFormMapper {
    public static PageEntity toPageEntity(CreatePageForm page) {
        return PageEntity.builder()
            .title(page.getTitle())
            .type(page.getType())
            .build();
    }

}
