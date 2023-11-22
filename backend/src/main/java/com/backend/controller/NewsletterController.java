package com.backend.controller;

import java.util.List;

import com.backend.model.newsletter.CreateNewsletterForm;
import com.backend.model.newsletter.EditNewsletterForm;
import com.backend.model.newsletter.Newsletter;
import com.backend.service.NewsletterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/newsletter")
public class NewsletterController {
    private final NewsletterService newsletterService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Newsletter createNewsletter(@Valid @RequestBody CreateNewsletterForm createNewsletterForm) {
        return newsletterService.createNewsletter(createNewsletterForm);
    }

    @GetMapping
    public List<Newsletter> getNewsletters() {
        return newsletterService.getNewsletters();
    }

    @GetMapping(path = "/{id}")
    public Newsletter getNewsletter(@PathVariable Long id) {
        return newsletterService.getNewsletter(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(path = "/{id}")
    public Newsletter editNewsletter(@PathVariable Long id, @Valid @RequestBody EditNewsletterForm editNewsletterForm) {
        return newsletterService.editNewsletter(id, editNewsletterForm);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = "/{id}")
    public void deleteNewsletter(@PathVariable Long id) {
        newsletterService.deleteNewsletter(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(path = "publish/{id}")
    public Newsletter publishNewsletter(@PathVariable Long id) {
        return newsletterService.isPublishedNewsletter(id);
    }
}
