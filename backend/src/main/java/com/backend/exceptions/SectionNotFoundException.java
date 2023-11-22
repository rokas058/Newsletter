package com.tietoevry.backend.exceptions;

public class SectionNotFoundException extends RuntimeException {
    public SectionNotFoundException(String message) {
        super(message);
    }
}
