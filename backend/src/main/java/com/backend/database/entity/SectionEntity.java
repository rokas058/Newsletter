package com.tietoevry.backend.database.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
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

@Entity(name = "section")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SectionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sectionId;
    private String title;
    private String text;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "page_id")
    private PageEntity page;

    @OneToMany(mappedBy = "section", cascade = CascadeType.ALL)
    private List<ImageEntity> images;

}
