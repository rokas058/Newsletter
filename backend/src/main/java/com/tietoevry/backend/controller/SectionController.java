package com.tietoevry.backend.controller;

import java.io.IOException;
import java.util.List;

import com.tietoevry.backend.model.CreateSectionForm;
import com.tietoevry.backend.model.EditSectionForm;
import com.tietoevry.backend.model.Section;
import com.tietoevry.backend.service.SectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
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

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
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

    @GetMapping
    public List<Section> getSections() {
        return sectionService.getSections();
    }

    @GetMapping(path = "/{id}")
    public Section getSection(@PathVariable Long id) {
        return sectionService.getSection(id);
    }

    @PutMapping(path = "/{id}",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Section editSection(
        @PathVariable Long id,
        @RequestParam(value = "title", required = false) String title,
        @RequestParam(value = "text", required = false) String text,
        @RequestParam(value = "image", required = false) MultipartFile imageFile
    ) throws IOException {
        EditSectionForm editSectionForm = EditSectionForm.builder()
            .title(title)
            .text(text)
            .image((imageFile == null) ? null : imageFile.getBytes())
            .build();

        return sectionService.editSection(id, editSectionForm);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteSection(@PathVariable Long id) {
        sectionService.deleteSection(id);
    }
}
