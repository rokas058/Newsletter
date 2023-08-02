package com.tietoevry.backend.mapper;

import com.tietoevry.backend.database.entity.UserEntity;
import com.tietoevry.backend.model.User;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class UserMapper {
    public static User toUser(UserEntity user) {
        return User.builder()
            .id(user.getId())
            .firstName(user.getFirstName())
            .lastName(user.getLastName())
            .roles(user.getRoles())
            .username(user.getUsername())
            .email(user.getEmail())
            .build();
    }
}
