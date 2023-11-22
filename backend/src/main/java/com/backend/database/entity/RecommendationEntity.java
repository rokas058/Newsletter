package com.backend.database.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "recommendation")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecommendationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recommendationsId;
    @NotNull
    private String title;
    @NotNull
    @Enumerated(EnumType.STRING)
    private MediaType mediaType;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "newsletter_id")
    private NewsletterEntity newsletter;
    @NotNull
    private String apiId;

}
