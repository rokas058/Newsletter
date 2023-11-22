package com.backend.model.book;

import java.util.List;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class GoogleVolumes {

    private List<Volume> items;

}
