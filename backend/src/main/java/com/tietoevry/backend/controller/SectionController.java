package com.tietoevry.backend.controller;

import java.io.IOException;

import com.tietoevry.backend.model.CreateSectionForm;
import com.tietoevry.backend.model.Section;
import com.tietoevry.backend.service.SectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/section")
public class SectionController {
    private final SectionService sectionService;

    @PostMapping(consumes = "multipart/form-data")
    public Section createSection(
        @RequestParam(value = "title", required = false) String title,
        @RequestParam(value = "text", required = false) String text,
        @RequestParam(value = "image", required = false) MultipartFile imageFile,
        @RequestParam("pageId") Long pageId
    ) throws IOException {
        CreateSectionForm createSectionForm = CreateSectionForm.builder()
            .title(title)
            .text(text)
            .pageId(pageId)
            .image((imageFile == null) ? null : imageFile.getBytes())
            .build();

        return sectionService.createSection(createSectionForm);
    }
}
