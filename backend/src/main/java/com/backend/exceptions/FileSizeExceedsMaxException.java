package com.backend.exceptions;

public class FileSizeExceedsMaxException extends RuntimeException {
    public FileSizeExceedsMaxException(String message) {
        super(message);
    }
}
