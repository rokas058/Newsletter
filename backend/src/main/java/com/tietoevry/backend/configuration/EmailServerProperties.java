package com.tietoevry.backend.configuration;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "email-server")
@Data
public class EmailServerProperties {
    @NotNull
    private String senderEmail;
    boolean enabled;
}
