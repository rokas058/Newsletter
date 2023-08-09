package com.tietoevry.backend.controller;

import java.io.IOException;

import com.tietoevry.backend.model.CreateImageForm;
import com.tietoevry.backend.model.Image;
import com.tietoevry.backend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/image")
public class ImageController {
    private final ImageService imageService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Image createImage(
        @RequestParam(value = "sectionId", required = true) Long sectionId,
        @RequestParam(value = "image", required = true) MultipartFile imageFile
    ) throws IOException {
        CreateImageForm createImageForm = CreateImageForm.builder()
            .sectionId(sectionId)
            .image(imageFile.getBytes())
            .build();

        return imageService.createImage(createImageForm);
    }

}
