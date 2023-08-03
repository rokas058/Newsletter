package com.tietoevry.backend.database.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Pages")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageEntity {
    @Id
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private Type type;
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "newsletter_id")
    private NewsletterEntity newsletter;
}
