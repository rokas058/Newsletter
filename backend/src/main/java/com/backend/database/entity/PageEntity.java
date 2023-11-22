package com.backend.database.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "page")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pageId;
    @NotNull
    private String title;
    @NotNull
    @Enumerated(EnumType.STRING)
    private Type type;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "newsletter_id")
    private NewsletterEntity newsletter;
    @OneToMany(mappedBy = "page", cascade = CascadeType.ALL)
    private List<SectionEntity> sections;
}
