package com.tietoevry.backend.model;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Session {
    String username;
}
