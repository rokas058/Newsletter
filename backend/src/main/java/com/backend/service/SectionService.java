package com.backend.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.backend.database.entity.ImageEntity;
import com.backend.mapper.section.CreateSectionFormMapper;
import com.backend.mapper.section.EditSectionFormMapper;
import com.backend.mapper.section.SectionMapper;
import com.backend.model.section.CreateSectionForm;
import com.backend.model.section.EditSectionForm;
import com.backend.model.section.Section;
import com.backend.database.entity.PageEntity;
import com.backend.database.entity.SectionEntity;
import com.backend.database.repository.ImageRepository;
import com.backend.database.repository.PageRepository;
import com.backend.database.repository.SectionRepository;
import com.backend.exceptions.PageNotFoundException;
import com.backend.exceptions.SectionNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Slf4j
public class SectionService {
    private final SectionRepository sectionRepository;
    private final PageRepository pageRepository;
    private final ImageRepository imageRepository;

    public Section createSection(String title, String text, Long pageId, List<MultipartFile> imageList) {
        List<byte[]> imageBytesList = imageToBytes(imageList);
        CreateSectionForm createSectionForm =
            CreateSectionFormMapper.toCreateSectionForm(title, text, pageId, imageBytesList);

        PageEntity page = pageRepository.findById(createSectionForm.getPageId())
            .orElseThrow(() -> new PageNotFoundException("Page not found with ID: " + createSectionForm.getPageId()));

        SectionEntity sectionToCreate = CreateSectionFormMapper.toSectionEntity(createSectionForm);
        sectionToCreate.setPage(page);

        if (createSectionForm.getImages() != null) {
            List<ImageEntity> images = createSectionForm.getImages().stream()
                .map(imageData -> new ImageEntity(imageData, sectionToCreate))
                .collect(Collectors.toList());
            sectionToCreate.setImages(images);
        }


        SectionEntity savedSection = sectionRepository.save(sectionToCreate);

        return SectionMapper.toSection(savedSection);
    }

    public List<Section> getSections() {
        List<SectionEntity> sections = sectionRepository.findAll();
        return sections
            .stream()
            .map(SectionMapper::toSection)
            .toList();
    }

    public Section getSection(Long id) {
        Optional<SectionEntity> section = sectionRepository.findById(id);

        return section.map(SectionMapper::toSection)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found by id " + id));
    }

    @Transactional
    public Section editSection(String title, String text, Long id, List<MultipartFile> imageList) {
        List<byte[]> imageBytesList = imageToBytes(imageList);

        EditSectionForm editSectionForm = EditSectionFormMapper.toEditSectionForm(title, text, imageBytesList);

        SectionEntity getSection = sectionRepository.findById(id)
            .orElseThrow(
                () -> new SectionNotFoundException(String.format("Section with id %d does not exist.", id)));

        imageRepository.deleteAllBySection_SectionId(id);
        SectionEntity updateSection = EditSectionFormMapper.toSectionEntity(id, editSectionForm);
        updateSection.setPage(getSection.getPage());

        if (editSectionForm.getImages() != null) {
            List<ImageEntity> images = editSectionForm.getImages().stream()
                .map(imageData -> new ImageEntity(imageData, updateSection))
                .collect(Collectors.toList());
            updateSection.setImages(images);
        }

        SectionEntity section = sectionRepository.save(updateSection);
        return SectionMapper.toSection(section);
    }

    public void deleteSection(Long id) {
        sectionRepository.deleteById(id);
    }

    private List<byte[]> imageToBytes(List<MultipartFile> imageFiles) {
        List<byte[]> imageBytesList = null;
        if (imageFiles != null) {
            imageBytesList = imageFiles.stream()
                .map(file -> {
                    try {
                        return file.getBytes();
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                }).toList();
        }
        return imageBytesList;
    }

}
