package com.tietoevry.backend.model.session;

import java.util.List;

import com.tietoevry.backend.database.entity.Role;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Session {
    String username;
    List<Role> roles;
}
