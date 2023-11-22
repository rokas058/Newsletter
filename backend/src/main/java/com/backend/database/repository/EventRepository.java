package com.tietoevry.backend.database.repository;

import com.tietoevry.backend.database.entity.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<EventEntity, Long> {
}
