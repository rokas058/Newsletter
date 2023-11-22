package com.backend.service;

import java.util.List;
import java.util.Optional;

import com.backend.database.entity.NewsletterEntity;
import com.backend.mapper.page.CreatePageFormMapper;
import com.backend.mapper.page.EditPageFormMapper;
import com.backend.mapper.page.PageMapper;
import com.backend.model.page.CreatePageForm;
import com.backend.model.page.EditPageForm;
import com.backend.model.page.Page;
import com.backend.database.entity.PageEntity;
import com.backend.database.repository.NewsletterRepository;
import com.backend.database.repository.PageRepository;
import com.backend.exceptions.PageNotFoundException;
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

    public List<Page> getPages() {
        List<PageEntity> pages = pageRepository.findAll();
        return pages
            .stream()
            .map(PageMapper::toPage)
            .toList();
    }

    public Page getPage(Long id) {
        Optional<PageEntity> page = pageRepository.findById(id);

        return page.map(PageMapper::toPage)
            .orElseThrow(() -> new PageNotFoundException(String.format("Page not found by id %d", id)));
    }

    public Page editPage(Long id, EditPageForm editPageForm) {
        PageEntity existingPage = pageRepository.findById(id)
            .orElseThrow(() -> new PageNotFoundException(String.format("Page with id %d does not exist.", id)));

        EditPageFormMapper.updatePageEntity(existingPage, editPageForm);
        PageEntity updatedPage = pageRepository.save(existingPage);
        return PageMapper.toPage(updatedPage);
    }

    public void deletePage(Long id) {
        PageEntity page = pageRepository.findById(id)
            .orElseThrow(
                () -> new PageNotFoundException(String.format("Page with id %d does not exist.", id)));
        pageRepository.delete(page);
    }
}

