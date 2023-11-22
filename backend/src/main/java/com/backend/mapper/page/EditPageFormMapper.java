package com.backend.mapper.page;

import com.backend.model.page.EditPageForm;
import com.backend.database.entity.PageEntity;
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

