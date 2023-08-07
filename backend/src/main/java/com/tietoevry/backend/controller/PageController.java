package com.tietoevry.backend.controller;

import com.tietoevry.backend.model.CreatePageForm;
import com.tietoevry.backend.model.Page;
import com.tietoevry.backend.service.PageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/page")
public class PageController {
    private final PageService pageService;

    @PostMapping
    public Page createPage(@Valid @RequestBody CreatePageForm createPageForm) {
        return pageService.createPage(createPageForm);
    }
}
