package com.backend.database.entity;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(enumAsRef = true)
public enum EventType {
    BIRTHDAY,
    HOLIDAY,
    OTHER
}
