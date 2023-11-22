package com.backend.model.session;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class LoginData {
    @NotNull
    String username;
    @NotNull
    String password;
}
