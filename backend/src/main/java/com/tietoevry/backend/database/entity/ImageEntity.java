package com.tietoevry.backend.database.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "image")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;
    @NotNull
    @Size(max = 1024 * 1024, message = "Image size exceeds 1MB")
    @Lob
    private byte[] image;

    @JsonIgnore
    @NotNull
    @ManyToOne
    @JoinColumn(name = "section_id")
    private SectionEntity section;

    public ImageEntity(byte[] image, SectionEntity section) {
        this.image = image;
        this.section = section;
    }
}
