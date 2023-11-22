package com.backend.model.page;

import com.backend.database.entity.Type;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EditPageForm {
    @NotNull
    String title;
    @NotNull
    Type type;
}
