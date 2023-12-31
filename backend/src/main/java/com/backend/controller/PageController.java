package com.backend.controller;

import java.util.List;

import com.backend.model.page.CreatePageForm;
import com.backend.model.page.EditPageForm;
import com.backend.model.page.Page;
import com.backend.service.PageService;
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
@RequestMapping("/api/page")
public class PageController {
    private final PageService pageService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Page createPage(@Valid @RequestBody CreatePageForm createPageForm) {
        return pageService.createPage(createPageForm);
    }

    @GetMapping
    public List<Page> getPages() {
        return pageService.getPages();
    }

    @GetMapping(path = "/{id}")
    public Page getPage(@PathVariable Long id) {
        return pageService.getPage(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(path = "/{id}")
    public Page editPage(@PathVariable Long id, @Valid @RequestBody EditPageForm editPageForm) {
        return pageService.editPage(id, editPageForm);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = "/{id}")
    public void deletePage(@PathVariable Long id) {
        pageService.deletePage(id);
    }
}
