package com.tietoevry.backend.controller;

import java.io.IOException;

import com.tietoevry.backend.model.CreateSectionForm;
import com.tietoevry.backend.model.Section;
import com.tietoevry.backend.service.SectionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/section")
public class SectionController {
    private final SectionService sectionService;

    @PostMapping(consumes = "multipart/form-data")
    public Section createSection(@Valid @RequestBody CreateSectionForm createSectionForm,
                                 @RequestPart(value = "image", required = false) MultipartFile image)
        throws IOException {
        return sectionService.createSection(createSectionForm, image);
    }
}
