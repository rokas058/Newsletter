package com.tietoevry.backend.database.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
@Schema(enumAsRef = true)
public enum Type {
    HR_FRONT("hr-front"),
    OFF_TOPIC("off-topic"),
    STAR("star"),
    NEWS("news"),
    JOBS("jobs"),
    CALENDER("calender"),
    TRAVELS("travels"),
    RECOMMENDATIONS("recommendations"),
    ANNOUNCEMENTS("announcements");

    private final String value;

    Type(String value) {
        this.value = value;
    }

}
