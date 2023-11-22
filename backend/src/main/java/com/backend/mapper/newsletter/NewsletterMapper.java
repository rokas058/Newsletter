package com.tietoevry.backend.mapper.newsletter;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.mapper.page.PageMapper;
import com.tietoevry.backend.mapper.recommendation.RecommendationMapper;
import com.tietoevry.backend.model.newsletter.Newsletter;
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
