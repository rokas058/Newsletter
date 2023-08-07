package com.tietoevry.backend.service;

import java.util.List;
import java.util.Optional;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.database.repository.NewsletterRepository;
import com.tietoevry.backend.exceptions.NewsletterNotFoundException;
import com.tietoevry.backend.mapper.CreateNewsletterFormMapper;
import com.tietoevry.backend.mapper.EditNewsletterFormMapper;
import com.tietoevry.backend.mapper.NewsletterMapper;
import com.tietoevry.backend.model.CreateNewsletterForm;
import com.tietoevry.backend.model.EditNewsletterForm;
import com.tietoevry.backend.model.Newsletter;
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
        NewsletterEntity createdNewsletter = newsletterRepository.save(newsletterToCreate);
        return NewsletterMapper.toNewsletter(createdNewsletter);
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
}
