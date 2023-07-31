package com.tietoevry.backend.service;

import com.tietoevry.backend.authorization.CustomUserDetails;
import com.tietoevry.backend.authorization.SecurityContextService;
import com.tietoevry.backend.mapper.SessionMapper;
import com.tietoevry.backend.model.Session;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class SessionService {
    private final SecurityContextService contextService;

    public Session getSession() {
        CustomUserDetails currentUser = contextService.getCurrentUser();

        return SessionMapper.toSession(currentUser);
    }

    public Session createSession(HttpServletRequest httpServletRequest, String username, String password) {
        CustomUserDetails userDetails = contextService.createSession(httpServletRequest, username, password);

        return SessionMapper.toSession(userDetails);
    }
}
