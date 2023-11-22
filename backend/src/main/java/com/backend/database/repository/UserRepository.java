package com.backend.database.repository;

import java.util.Optional;

import com.backend.database.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsername(String username);

    boolean existsByEmail(String email);

    boolean existsByIdIsNotAndEmail(Long id, String email);
}

