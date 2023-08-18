package com.tietoevry.backend.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.database.entity.Type;
import com.tietoevry.backend.database.repository.NewsletterRepository;
import com.tietoevry.backend.exceptions.NewsletterNotFoundException;
import com.tietoevry.backend.mapper.newsletter.CreateNewsletterFormMapper;
import com.tietoevry.backend.mapper.newsletter.NewsletterMapper;
import com.tietoevry.backend.mapper.page.PageMapper;
import com.tietoevry.backend.model.newsletter.CreateNewsletterForm;
import com.tietoevry.backend.model.newsletter.EditNewsletterForm;
import com.tietoevry.backend.model.newsletter.Newsletter;
import jakarta.transaction.Transactional;
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
            .sorted(Comparator.comparing(Newsletter::getPublishDate).reversed())
            .toList();
    }

    public Newsletter createNewsletter(CreateNewsletterForm createNewsletterForm) {
        NewsletterEntity newsletterToCreate = CreateNewsletterFormMapper.toNewsletterEntity(createNewsletterForm);
        List<PageEntity> pageEntities = createNewsletterPages(newsletterToCreate);
        newsletterToCreate.setPages(pageEntities);
        NewsletterEntity createdNewsletter = newsletterRepository.save(newsletterToCreate);


        return NewsletterMapper.toNewsletter(createdNewsletter);
    }

    private List<PageEntity> createNewsletterPages(NewsletterEntity newsletterToCreate) {
        List<Type> typeList = List.of(
            Type.HR_FRONT, Type.OFF_TOPIC, Type.STAR, Type.NEWS, Type.JOBS,
            Type.CALENDER, Type.TRAVELS, Type.RECOMMENDATIONS, Type.ANNOUNCEMENTS);

        return typeList.stream()
            .map(type -> PageMapper.toCreatPage(type, type.toString(), newsletterToCreate))
            .collect(Collectors.toList());
    }

    public Newsletter getNewsletter(Long id) {
        return newsletterRepository.findById(id)
            .map(NewsletterMapper::toNewsletter)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found by id " + id));
    }

    public Newsletter editNewsletter(Long id, EditNewsletterForm editNewsletterForm) {
        NewsletterEntity existNewsletter = newsletterRepository.findById(id)
            .orElseThrow(
                () -> new NewsletterNotFoundException(String.format("Newsletter with id %d does not exist.", id)));

        existNewsletter.setTitle(editNewsletterForm.getTitle());
        existNewsletter.setPublishDate(editNewsletterForm.getPublishDate());
        NewsletterEntity newsletter = newsletterRepository.save(existNewsletter);
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

    @Transactional
    public Newsletter isPublishedNewsletter(Long id) {
        NewsletterEntity newsletter = newsletterRepository.findById(id)
            .orElseThrow(
                () -> new NewsletterNotFoundException(String.format("Newsletter with id %d does not exist.", id)));

        List<NewsletterEntity> newsletters = newsletterRepository.findAll();

        if (newsletter.getIsPublished()) {
            throw new IllegalStateException("Newsletter is already published");
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
