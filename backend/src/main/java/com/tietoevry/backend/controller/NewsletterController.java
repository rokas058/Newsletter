package com.tietoevry.backend.controller;

import java.util.List;

import com.tietoevry.backend.model.CreateNewsletterForm;
import com.tietoevry.backend.model.Newsletter;
import com.tietoevry.backend.service.NewsletterService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/api/newsletter")
public class NewsletterController {
    private final NewsletterService newsletterService;

    @PostMapping
    public Newsletter createNewsletter(@Valid @RequestBody CreateNewsletterForm createNewsletterForm) {
        return newsletterService.createNewsletter(createNewsletterForm);
    }

    @GetMapping
    public List<Newsletter> getNewsletters() {
        return newsletterService.getNewsletters();
    }
}
