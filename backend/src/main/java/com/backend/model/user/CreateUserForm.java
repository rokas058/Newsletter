package com.backend.model.user;

import java.time.LocalDate;
import java.util.List;

import com.backend.database.entity.Role;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateUserForm {
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
    @NotNull
    LocalDate birthday;
    @NotNull
    boolean confirmBirthday;
    @NotNull
    String password;

}
