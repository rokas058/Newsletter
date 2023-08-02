package com.tietoevry.backend.utils;

import java.security.SecureRandom;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PasswordGenerator {
    private static final int DEFAULT_BYTE_LENGTH = 30;

    public static String generatePassword() {
        SecureRandom secureRandom = new SecureRandom();
        byte[] randomBytes = new byte[DEFAULT_BYTE_LENGTH];
        secureRandom.nextBytes(randomBytes);
        return Base64.encodeBase64String(randomBytes);
    }
}
