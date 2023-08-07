package com.tietoevry.backend.service;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.database.repository.NewsletterRepository;
import com.tietoevry.backend.database.repository.PageRepository;
import com.tietoevry.backend.mapper.CreatePageFormMapper;
import com.tietoevry.backend.mapper.PageMapper;
import com.tietoevry.backend.model.CreatePageForm;
import com.tietoevry.backend.model.Page;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PageService {
    private final PageRepository pageRepository;
    private final NewsletterRepository newsletterRepository;

    public Page createPage(CreatePageForm createPageForm) {
        NewsletterEntity newsletter = newsletterRepository.findById(createPageForm.getNewsletterId())
            .orElseThrow();
        PageEntity pageToCreate = CreatePageFormMapper.toPageEntity(createPageForm);
        pageToCreate.setNewsletter(newsletter);
        PageEntity savedPage = pageRepository.save(pageToCreate);
        newsletter.getPages().add(pageToCreate);
        newsletterRepository.save(newsletter);
        return PageMapper.toPage(savedPage);
    }
}

