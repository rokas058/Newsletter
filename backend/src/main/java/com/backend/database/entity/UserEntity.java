package com.tietoevry.backend.database.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Users")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    private String password;
    @ElementCollection(targetClass = Role.class)
    @JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "users_id"))
    @Enumerated(EnumType.STRING)
    private List<Role> roles;
    @Column(unique = true)
    private String email;
    private String firstName;
    private String lastName;
    private LocalDate birthday;
    private boolean confirmBirthday;
}
