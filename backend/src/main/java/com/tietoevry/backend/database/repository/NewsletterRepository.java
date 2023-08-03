package com.tietoevry.backend.database.repository;

import com.tietoevry.backend.database.entity.NewsletterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsletterRepository extends JpaRepository<NewsletterEntity, Long> {
    //Optional<NewsletterEntity> findById(Long id);


}
