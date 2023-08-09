package com.tietoevry.backend.model.section;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EditSectionForm {
    String title;
    String text;
    byte[] image;
}
