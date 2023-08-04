package com.tietoevry.backend.database.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long newsletter_id;
    @NotNull
    private LocalDateTime publishDate;
    @NotNull
    private Boolean isPublished;
    @JsonIgnore
    //@OneToMany(mappedBy = "newsletter", cascade = CascadeType.MERGE, orphanRemoval = true)
    @OneToMany(mappedBy = "newsletter", cascade = CascadeType.ALL)
    private List<PageEntity> pages;
}
