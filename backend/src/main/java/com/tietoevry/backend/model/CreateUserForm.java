package com.tietoevry.backend.model;

import java.time.LocalDate;
import java.util.List;

import com.tietoevry.backend.database.entity.Role;
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
    // Fixme
    LocalDate birthday = LocalDate.parse("2018-05-05");
    @NotNull
    //Fixme
    boolean confirmBirthday = false;
    @NotNull
    //Fixme
    String password = "1234";

}
