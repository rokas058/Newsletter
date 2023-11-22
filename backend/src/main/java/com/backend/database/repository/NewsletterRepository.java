package com.backend.database.repository;

import com.backend.database.entity.NewsletterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsletterRepository extends JpaRepository<NewsletterEntity, Long> {


}
