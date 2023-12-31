package com.backend.controller;

import com.backend.model.session.LoginData;
import com.backend.model.session.Session;
import com.backend.service.SessionService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/session")
public class SessionController {
    private final SessionService sessionService;

    @GetMapping
    public Session getSession() {
        return sessionService.getSession();
    }

    @PostMapping
    public Session createSession(HttpServletRequest httpServletRequest, @Valid @RequestBody LoginData loginData) {
        return sessionService.createSession(
            httpServletRequest,
            loginData.getUsername(),
            loginData.getPassword()
        );
    }
}
