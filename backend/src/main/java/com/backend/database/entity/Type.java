package com.backend.database.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
@Schema(enumAsRef = true)
public enum Type {
    HR_FRONT,
    OFF_TOPIC,
    STAR,
    NEWS,
    JOBS,
    CALENDER,
    TRAVELS,
    RECOMMENDATIONS,
    ANNOUNCEMENTS


}
