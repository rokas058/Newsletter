package com.backend.model.page;

import com.backend.database.entity.Type;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreatePageForm {
    @NotNull
    String title;
    @NotNull
    long newsletterId;
    @NotNull
    Type type;
}
