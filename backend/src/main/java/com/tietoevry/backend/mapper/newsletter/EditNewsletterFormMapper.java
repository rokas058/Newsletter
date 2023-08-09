package com.tietoevry.backend.mapper.newsletter;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.model.newsletter.EditNewsletterForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EditNewsletterFormMapper {
    public static NewsletterEntity toNewsletterEntity(Long id, EditNewsletterForm newsletter) {
        return NewsletterEntity.builder()
            .newsletterId(id)
            .title(newsletter.getTitle())
            .publishDate(newsletter.getPublishDate())
            .isPublished(newsletter.getIsPublished())
            .build();
    }
}
