package com.backend.mapper.newsletter;

import com.backend.database.entity.NewsletterEntity;
import com.backend.model.newsletter.CreateNewsletterForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CreateNewsletterFormMapper {
    public static NewsletterEntity toNewsletterEntity(CreateNewsletterForm newsletter) {
        return NewsletterEntity.builder()
            .title(newsletter.getTitle())
            .publishDate(newsletter.getPublishDate())
            .isPublished(newsletter.getIsPublished())
            .build();
    }
}
