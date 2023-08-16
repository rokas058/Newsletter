package com.tietoevry.backend.controller;

import com.tietoevry.backend.api.GoogleBooksClient;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BookController {

    private final GoogleBooksClient googleBooksClient;

    @GetMapping("/book")
    public String getBook(@RequestParam String title) {
        return googleBooksClient.findBookByTitle(title);
    }

    @GetMapping("/book/{bookId}")
    public String getBookById(@RequestParam String bookId) {
        return googleBooksClient.getBookById(bookId);
    }
}
