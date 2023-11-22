package com.backend.model.section;

import java.util.List;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EditSectionForm {
    String title;
    String text;
    List<byte[]> images;
}
