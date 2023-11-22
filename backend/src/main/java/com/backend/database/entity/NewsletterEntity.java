package com.tietoevry.backend.database.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "newsletter")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewsletterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long newsletterId;
    @NotNull
    private String title;
    @NotNull
    private LocalDate publishDate;
    @NotNull
    private Boolean isPublished;
    @OneToMany(mappedBy = "newsletter", cascade = CascadeType.ALL)
    private List<PageEntity> pages;
    @OneToMany(mappedBy = "newsletter", cascade = CascadeType.ALL)
    private List<RecommendationEntity> recommendations;
}
