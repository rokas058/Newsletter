package com.tietoevry.backend.mapper.user;

import com.tietoevry.backend.database.entity.UserEntity;
import com.tietoevry.backend.model.user.User;
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
            .birthday(user.getBirthday())
            .confirmBirthday(user.isConfirmBirthday())
            .build();
    }
}
