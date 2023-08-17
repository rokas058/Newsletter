package com.tietoevry.backend.controller;

import java.util.Optional;

import com.tietoevry.backend.model.book.Volume;
import com.tietoevry.backend.service.GoogleBooksApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BookController {

    private final GoogleBooksApiService googleBooksApiService;

    @GetMapping("/volume")
    public Optional<Volume> getBook(@RequestParam String title) {
        return googleBooksApiService.findBookByTitle(title);
    }

    @GetMapping("/volume/{volumeId}")
    public Volume getVolumeById(@RequestParam String bookId) {
        return googleBooksApiService.getBookById(bookId);
    }
}
