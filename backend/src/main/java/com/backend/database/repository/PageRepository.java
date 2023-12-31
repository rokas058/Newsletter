package com.backend.database.repository;

import java.util.List;

import com.backend.database.entity.PageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PageRepository extends JpaRepository<PageEntity, Long> {
    List<PageEntity> findByNewsletter_NewsletterId(Long newsletterId);

}
