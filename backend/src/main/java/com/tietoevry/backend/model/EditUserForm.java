package com.tietoevry.backend.model;

import java.util.List;

import com.tietoevry.backend.database.entity.Role;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class EditUserForm {
    @NotNull
    String firstName;
    @NotNull
    String lastName;
    @NotEmpty
    List<Role> roles;
    @NotNull
    String username;
    @NotNull
    String email;
}
