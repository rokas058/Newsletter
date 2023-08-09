package com.tietoevry.backend.service;

import java.io.IOException;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.database.repository.ImageRepository;
import com.tietoevry.backend.database.repository.SectionRepository;
import com.tietoevry.backend.mapper.CreateImageFormMapper;
import com.tietoevry.backend.mapper.ImageMapper;
import com.tietoevry.backend.model.CreateImageForm;
import com.tietoevry.backend.model.Image;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImageService {
    private final ImageRepository imageRepository;
    private final SectionRepository sectionRepository;

    public Image createImage(CreateImageForm createImageForm) throws IOException {
        SectionEntity section = sectionRepository.findById(createImageForm.getSectionId())
            .orElseThrow();
        ImageEntity imageToCreate = CreateImageFormMapper.toImageEntity(createImageForm);
        imageToCreate.setSection(section);
        ImageEntity savedImage = imageRepository.save(imageToCreate);
        section.getImages().add(imageToCreate);
        sectionRepository.save(section);
        return ImageMapper.toImage(savedImage);
    }
}
