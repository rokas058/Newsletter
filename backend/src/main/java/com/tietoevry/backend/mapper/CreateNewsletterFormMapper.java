package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.model.CreateNewsletterForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CreateNewsletterFormMapper {
    public static NewsletterEntity toNewsletterEntity(CreateNewsletterForm newsletter) {
        return NewsletterEntity.builder()
            .publishDate(newsletter.getPublishDate())
            .isPublished(newsletter.getIsPublished())
            .build();
    }
}
