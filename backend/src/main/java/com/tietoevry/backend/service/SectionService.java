package com.tietoevry.backend.service;

import java.io.IOException;

import com.tietoevry.backend.database.entity.PageEntity;
import com.tietoevry.backend.database.entity.SectionEntity;
import com.tietoevry.backend.database.repository.PageRepository;
import com.tietoevry.backend.database.repository.SectionRepository;
import com.tietoevry.backend.mapper.CreateSectionFormMapper;
import com.tietoevry.backend.mapper.SectionMapper;
import com.tietoevry.backend.model.CreateSectionForm;
import com.tietoevry.backend.model.Section;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
}
