package com.tietoevry.backend.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.database.repository.PageRepository;
import com.tietoevry.backend.database.repository.SectionRepository;
import com.tietoevry.backend.exceptions.NewsletterNotFoundException;
import com.tietoevry.backend.mapper.section.CreateSectionFormMapper;
import com.tietoevry.backend.mapper.section.EditSectionFormMapper;
import com.tietoevry.backend.mapper.section.SectionMapper;
import com.tietoevry.backend.model.section.CreateSectionForm;
import com.tietoevry.backend.model.section.EditSectionForm;
import com.tietoevry.backend.model.section.Section;
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

    public Section createSection(CreateSectionForm createSectionForm) throws IOException {
        PageEntity page = pageRepository.findById(createSectionForm.getPageId())
            .orElseThrow();
        SectionEntity sectionToCreate = CreateSectionFormMapper.toSectionEntity(createSectionForm);
        sectionToCreate.setPage(page);
        SectionEntity savedSection = sectionRepository.save(sectionToCreate);
        page.getSections().add(sectionToCreate);
        pageRepository.save(page);
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

    public Section editSection(Long id, EditSectionForm editSectionForm) {
        SectionEntity getSection = sectionRepository.findById(id)
            .orElseThrow(
                () -> new NewsletterNotFoundException(String.format("Newsletter with id %d does not exist.", id)));

        SectionEntity updateSection = EditSectionFormMapper.toSectionEntity(id, editSectionForm);
        updateSection.setPage(getSection.getPage());
        SectionEntity section = sectionRepository.save(updateSection);
        return SectionMapper.toSection(section);
    }

    public void deleteSection(Long id) {
        sectionRepository.deleteById(id);
    }
}
