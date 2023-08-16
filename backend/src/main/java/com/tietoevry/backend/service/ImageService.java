package com.tietoevry.backend.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.database.repository.ImageRepository;
import com.tietoevry.backend.database.repository.SectionRepository;
import com.tietoevry.backend.mapper.image.CreateImageFormMapper;
import com.tietoevry.backend.mapper.image.ImageMapper;
import com.tietoevry.backend.model.image.CreateImageForm;
import com.tietoevry.backend.model.image.Image;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImageService {
    private final ImageRepository imageRepository;
    private final SectionRepository sectionRepository;

    public Image createImage(Long sectionId, MultipartFile imageFile) throws IOException {
        CreateImageForm createImageForm = CreateImageForm.builder()
            .sectionId(sectionId)
            .image(imageFile.getBytes())
            .build();

        SectionEntity section = sectionRepository.findById(createImageForm.getSectionId())
            .orElseThrow();
        ImageEntity imageToCreate = CreateImageFormMapper.toImageEntity(createImageForm);
        imageToCreate.setSection(section);
        ImageEntity savedImage = imageRepository.save(imageToCreate);
        section.getImages().add(imageToCreate);
        sectionRepository.save(section);
        return ImageMapper.toImage(savedImage);
    }

    public List<Image> getImages(Long id) {
        List<ImageEntity> imageEntities = imageRepository.findAllBySection_SectionId(id);
        
        return imageEntities.stream()
            .map(ImageMapper::toImage)
            .collect(Collectors.toList());
    }
}
