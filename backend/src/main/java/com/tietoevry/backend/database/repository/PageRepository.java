package com.tietoevry.backend.database.repository;

import com.tietoevry.backend.database.entity.PageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PageRepository extends JpaRepository<PageEntity, Long> {
}
