package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.model.Newsletter;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class NewsletterMapper {

    public static Newsletter toNewsletter(NewsletterEntity newsletter) {
        return Newsletter.builder()
            .id(newsletter.getId())
            .publishDate(newsletter.getPublishDate())
            .isPublished(newsletter.getIsPublished())
            .pages(newsletter.getPages()).build();
    }

}
