package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.model.EditPageForm;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EditPageFormMapper {
    public static void updatePageEntity(PageEntity existingPage, EditPageForm form) {
        if (form.getTitle() != null) {
            existingPage.setTitle(form.getTitle());
        }
        if (form.getType() != null) {
            existingPage.setType(form.getType());
        }
    }
}

