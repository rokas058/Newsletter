package com.tietoevry.backend.database.repository;

import com.tietoevry.backend.database.entity.SectionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionRepository extends JpaRepository<SectionEntity, Long> {
}
