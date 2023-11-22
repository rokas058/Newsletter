package com.tietoevry.backend.database.entity;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(enumAsRef = true)
public enum MediaType {
    FILM,
    BOOK
}
