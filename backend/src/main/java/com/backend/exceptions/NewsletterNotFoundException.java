package com.backend.exceptions;

public class NewsletterNotFoundException extends RuntimeException {
    public NewsletterNotFoundException(String message) {
        super(message);
    }
}
