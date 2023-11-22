package com.tietoevry.backend.authorization;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SecurityContextService {
    private final AuthenticationManager authenticationManager;

    public CustomUserDetails getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return principal instanceof CustomUserDetails customUserDetails ? customUserDetails : null;
    }

    public CustomUserDetails createSession(HttpServletRequest httpServletRequest, String username, String password) {
        UsernamePasswordAuthenticationToken authenticationToken =
            UsernamePasswordAuthenticationToken.unauthenticated(username, password);
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);

        HttpSession session = httpServletRequest.getSession(true);
        session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, securityContext);

        return (CustomUserDetails) authentication.getPrincipal();
    }
}
