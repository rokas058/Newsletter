package com.tietoevry.backend.exceptions;

public class EventNotFoundException extends RuntimeException {

    public EventNotFoundException(String name) {
        super(name);
    }
}
