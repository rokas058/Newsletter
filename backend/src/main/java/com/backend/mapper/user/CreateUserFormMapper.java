package com.backend.mapper.user;

import com.backend.database.entity.UserEntity;
import com.backend.model.user.CreateUserForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CreateUserFormMapper {
    public static UserEntity toUserEntity(CreateUserForm user, String password) {
        return UserEntity.builder()
            .username(user.getUsername())
            .password(password)
            .firstName(user.getFirstName())
            .lastName(user.getLastName())
            .email(user.getEmail())
            .roles(user.getRoles())
            .birthday(user.getBirthday())
            .confirmBirthday(user.isConfirmBirthday())
            .build();
    }
}
