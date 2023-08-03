package com.tietoevry.backend.database.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Newsletters")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewsletterEntity {
    @Id
    private Long id;
    @NotNull
    private LocalDateTime publishDate;
    @NotNull
    private Boolean isPublished;
    @OneToMany(mappedBy = "newsletter", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PageEntity> pages;
}
