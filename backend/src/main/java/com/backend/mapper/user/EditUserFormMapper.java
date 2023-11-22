package com.backend.mapper.user;

import com.backend.database.entity.UserEntity;
import com.backend.model.user.EditUserForm;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class EditUserFormMapper {
    public static UserEntity toUserEntity(Long id, String password, EditUserForm user) {
        return UserEntity.builder()
            .id(id)
            .password(password)
            .username(user.getUsername())
            .firstName(user.getFirstName())
            .lastName(user.getLastName())
            .email(user.getEmail())
            .roles(user.getRoles())
            .birthday(user.getBirthday())
            .confirmBirthday(user.isConfirmBirthday())
            .build();
    }
}
