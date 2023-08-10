package com.tietoevry.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.tietoevry.backend.database.entity.ImageEntity;
import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.database.repository.ImageRepository;
import com.tietoevry.backend.database.repository.PageRepository;
import com.tietoevry.backend.database.repository.SectionRepository;
import com.tietoevry.backend.exceptions.PageNotFoundException;
import com.tietoevry.backend.exceptions.SectionNotFoundException;
import com.tietoevry.backend.mapper.CreateSectionFormMapper;
import com.tietoevry.backend.mapper.EditSectionFormMapper;
import com.tietoevry.backend.mapper.SectionMapper;
import com.tietoevry.backend.model.CreateSectionForm;
import com.tietoevry.backend.model.EditSectionForm;
import com.tietoevry.backend.model.Section;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Slf4j
public class SectionService {
    private final SectionRepository sectionRepository;
    private final PageRepository pageRepository;
    private final ImageRepository imageRepository;

    public Section createSection(CreateSectionForm createSectionForm) {
        PageEntity page = pageRepository.findById(createSectionForm.getPageId())
            .orElseThrow(() -> new PageNotFoundException("Page not found with ID: " + createSectionForm.getPageId()));

        SectionEntity sectionToCreate = CreateSectionFormMapper.toSectionEntity(createSectionForm);
        sectionToCreate.setPage(page);

        List<ImageEntity> images = createSectionForm.getImages().stream()
            .map(imageData -> new ImageEntity(imageData, sectionToCreate))
            .collect(Collectors.toList());
        sectionToCreate.setImages(images);

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
    public Section editSection(Long id, EditSectionForm editSectionForm) {
        SectionEntity getSection = sectionRepository.findById(id)
            .orElseThrow(
                () -> new SectionNotFoundException(String.format("Section with id %d does not exist.", id)));

        imageRepository.deleteAllBySection_SectionId(id);
        SectionEntity updateSection = EditSectionFormMapper.toSectionEntity(id, editSectionForm);
        updateSection.setPage(getSection.getPage());

        List<ImageEntity> images = editSectionForm.getImages().stream()
            .map(imageData -> new ImageEntity(imageData, updateSection))
            .collect(Collectors.toList());
        updateSection.setImages(images);

        SectionEntity section = sectionRepository.save(updateSection);
        return SectionMapper.toSection(section);
    }

    public void deleteSection(Long id) {
        sectionRepository.deleteById(id);
    }
}
