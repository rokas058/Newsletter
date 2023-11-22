package com.backend.mapper.page;

import com.backend.model.page.CreatePageForm;
import com.backend.database.entity.PageEntity;
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
