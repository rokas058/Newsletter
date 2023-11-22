package com.backend.controller;

import java.util.List;

import com.backend.model.section.Section;
import com.backend.service.SectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/section")
public class SectionController {
    private final SectionService sectionService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Section createSection(
        @RequestParam(value = "title", required = false) String title,
        @RequestParam(value = "text", required = false) String text,
        @RequestParam(value = "image", required = false) List<MultipartFile> imageFiles,
        @RequestParam("pageId") Long pageId
    ) {
        return sectionService.createSection(title, text, pageId, imageFiles);
    }

    @GetMapping
    public List<Section> getSections() {
        return sectionService.getSections();
    }

    @GetMapping(path = "/{id}")
    public Section getSection(@PathVariable Long id) {
        return sectionService.getSection(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(path = "/{id}",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Section editSection(
        @PathVariable Long id,
        @RequestParam(value = "title", required = false) String title,
        @RequestParam(value = "text", required = false) String text,
        @RequestParam(value = "image", required = false) List<MultipartFile> imageFiles
    ) {
        return sectionService.editSection(title, text, id, imageFiles);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = "/{id}")
    public void deleteSection(@PathVariable Long id) {
        sectionService.deleteSection(id);
    }

}
