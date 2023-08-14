package com.tietoevry.backend.mapper.session;

import java.util.Optional;

import com.tietoevry.backend.authorization.CustomUserDetails;
import com.tietoevry.backend.model.session.Session;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class SessionMapper {
    public static Session toSession(CustomUserDetails currentUser) {
        return Session.builder()
            .username(
                Optional.ofNullable(currentUser)
                    .map(CustomUserDetails::getUsername)
                    .orElse(null))
            .roles(
                Optional.ofNullable(currentUser)
                    .map(CustomUserDetails::getRoles)
                    .orElse(null)
            )
            .build();
    }
}
