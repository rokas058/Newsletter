package com.backend.database.repository;

import java.util.List;

import com.backend.database.entity.ImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<ImageEntity, Long> {

    void deleteAllBySection_SectionId(Long sectionId);

    // TODO nereikalingas
    List<ImageEntity> findAllBySection_SectionId(Long sectionId);
}
