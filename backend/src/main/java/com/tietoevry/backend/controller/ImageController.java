package com.tietoevry.backend.controller;

import java.io.IOException;
import java.util.List;

import com.tietoevry.backend.model.image.Image;
import com.tietoevry.backend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping("/api/image")
public class ImageController {
    private final ImageService imageService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Image createImage(
        @RequestParam Long sectionId,
        @RequestParam MultipartFile imageFile
    ) throws IOException {
        return imageService.createImage(sectionId, imageFile);
    }

    @GetMapping(path = "/{sectionId}")
    public List<Image> getImages(@PathVariable Long sectionId) {
        return imageService.getImages(sectionId);
    }

}
