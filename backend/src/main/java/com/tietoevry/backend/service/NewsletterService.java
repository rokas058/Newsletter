package com.tietoevry.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.database.entity.Type;
import com.tietoevry.backend.database.repository.NewsletterRepository;
import com.tietoevry.backend.exceptions.NewsletterNotFoundException;
import com.tietoevry.backend.mapper.newsletter.CreateNewsletterFormMapper;
import com.tietoevry.backend.mapper.newsletter.EditNewsletterFormMapper;
import com.tietoevry.backend.mapper.newsletter.NewsletterMapper;
import com.tietoevry.backend.model.newsletter.CreateNewsletterForm;
import com.tietoevry.backend.model.newsletter.EditNewsletterForm;
import com.tietoevry.backend.model.newsletter.Newsletter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
        List<PageEntity> pageEntities = CreateNewsletterPages(newsletterToCreate);
        newsletterToCreate.setPages(pageEntities);
        NewsletterEntity createdNewsletter = newsletterRepository.save(newsletterToCreate);
        return NewsletterMapper.toNewsletter(createdNewsletter);
    }

    private List<PageEntity> CreateNewsletterPages(NewsletterEntity newsletterToCreate) {
        List<Type> typeList = List.of(
            Type.HR_FRONT, Type.OFF_TOPIC, Type.STAR, Type.NEWS, Type.JOBS,
            Type.CALENDER, Type.TRAVELS, Type.RECOMMENDATIONS, Type.ANNOUNCEMENTS);

        List<PageEntity> pages = new ArrayList<>();

        for (Type type : typeList) {
            PageEntity page = new PageEntity();
            page.setType(type);  // Set the type for the page
            page.setTitle(type.toString());  // Set the title for the page
            page.setNewsletter(newsletterToCreate);  // Set the newsletter for the page
            pages.add(page);  // Add the page to the list
        }

        return pages;
    }

    public Newsletter getNewsletter(Long id) {
        Optional<NewsletterEntity> newsletter = newsletterRepository.findById(id);

        return newsletter.map(NewsletterMapper::toNewsletter)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found by id " + id));
    }

    public Newsletter editNewsletter(Long id, EditNewsletterForm editNewsletterForm) {
        newsletterRepository.findById(id)
            .orElseThrow(
                () -> new NewsletterNotFoundException(String.format("Newsletter with id %d does not exist.", id)));

        NewsletterEntity updatedNewsletter = EditNewsletterFormMapper.toNewsletterEntity(id, editNewsletterForm);
        NewsletterEntity newsletter = newsletterRepository.save(updatedNewsletter);
        return NewsletterMapper.toNewsletter(newsletter);
    }

    public void deleteNewsletter(Long id) {
        NewsletterEntity newsletter = newsletterRepository.findById(id)
            .orElseThrow(
                () -> new NewsletterNotFoundException(String.format("Newsletter with id %d does not exist.", id)));

        if (!newsletter.getIsPublished()) {
            newsletterRepository.deleteById(id);
        }
    }

    public Newsletter isPublishedNewsletter(Long id, boolean isPublished) {
        NewsletterEntity newsletter = newsletterRepository.findById(id)
            .orElseThrow(
                () -> new NewsletterNotFoundException(String.format("Newsletter with id %d does not exist.", id)));

        List<NewsletterEntity> newsletters = newsletterRepository.findAll();

        if (!isPublished || newsletter.getIsPublished()) {
            return NewsletterMapper.toNewsletter(newsletter);
        }

        newsletters.stream()
            .filter(NewsletterEntity::getIsPublished)
            .forEach(otherNewsletter -> {
                otherNewsletter.setIsPublished(false);
                newsletterRepository.save(otherNewsletter);
            });

        newsletter.setIsPublished(true);
        NewsletterEntity updatedNewsletter = newsletterRepository.save(newsletter);

        return NewsletterMapper.toNewsletter(updatedNewsletter);

    }
}
