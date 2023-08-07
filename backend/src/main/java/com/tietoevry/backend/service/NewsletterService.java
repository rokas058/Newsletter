package com.tietoevry.backend.service;

import java.util.List;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.database.repository.NewsletterRepository;
import com.tietoevry.backend.mapper.CreateNewsletterFormMapper;
import com.tietoevry.backend.mapper.NewsletterMapper;
import com.tietoevry.backend.model.CreateNewsletterForm;
import com.tietoevry.backend.model.Newsletter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class NewsletterService {
    private final NewsletterRepository newsletterRepository;

    public List<Newsletter> getNewsletters() {
        List<NewsletterEntity> newsletters = newsletterRepository.findAll();
        return newsletters
            .stream()
            .map(NewsletterMapper::toNewsletter)
            .toList();
    }

    public Newsletter createNewsletter(CreateNewsletterForm createNewsletterForm) {
        NewsletterEntity newsletterToCreate = CreateNewsletterFormMapper.toNewsletterEntity(createNewsletterForm);
        NewsletterEntity createdNewsletter = newsletterRepository.save(newsletterToCreate);
        return NewsletterMapper.toNewsletter(createdNewsletter);
    }
}
