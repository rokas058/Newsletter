package com.tietoevry.backend.controller;

import java.io.IOException;
import java.util.List;

import com.tietoevry.backend.model.section.CreateSectionForm;
import com.tietoevry.backend.model.section.EditSectionForm;
import com.tietoevry.backend.model.section.Section;
import com.tietoevry.backend.service.SectionService;
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
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/api/section")
public class SectionController {
    private final SectionService sectionService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Section createSection(
        @RequestParam(value = "title", required = false) String title,
        @RequestParam(value = "text", required = false) String text,
        @RequestParam(value = "image", required = false) List<MultipartFile> imageFiles,
        @RequestParam("pageId") Long pageId
    ) throws IOException {
        List<byte[]> imageBytesList = imageFiles.stream()
            .map(file -> {
                try {
                    return file.getBytes();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }).toList();

        CreateSectionForm createSectionForm = CreateSectionForm.builder()
            .title(title)
            .text(text)
            .pageId(pageId)
            .images(imageBytesList)
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

    //fixme
    @PutMapping(path = "/{id}",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Section editSection(
        @PathVariable Long id,
        @RequestParam(value = "title", required = false) String title,
        @RequestParam(value = "text", required = false) String text,
        @RequestParam(value = "image", required = false) List<MultipartFile> imageFiles
    ) throws IOException {

        List<byte[]> imageBytesList = imageFiles.stream()
            .map(file -> {
                try {
                    return file.getBytes();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }).toList();

        EditSectionForm editSectionForm = EditSectionForm.builder()
            .title(title)
            .text(text)
            .images(imageBytesList)
            .build();

        return sectionService.editSection(id, editSectionForm);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteSection(@PathVariable Long id) {
        sectionService.deleteSection(id);
    }
}
