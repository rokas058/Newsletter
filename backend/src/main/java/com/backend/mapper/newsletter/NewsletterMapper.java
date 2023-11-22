package com.backend.mapper.newsletter;

import com.backend.database.entity.NewsletterEntity;
import com.backend.mapper.page.PageMapper;
import com.backend.model.newsletter.Newsletter;
import com.backend.mapper.recommendation.RecommendationMapper;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class NewsletterMapper {
    public static Newsletter toNewsletter(NewsletterEntity newsletter) {
        return Newsletter.builder()
            .id(newsletter.getNewsletterId())
            .title(newsletter.getTitle())
            .publishDate(newsletter.getPublishDate())
            .isPublished(newsletter.getIsPublished())
            .pages(PageMapper.toPages(newsletter.getPages()))
            .recommendations(RecommendationMapper.toRecommendations(newsletter.getRecommendations()))
            .build();
    }

}
