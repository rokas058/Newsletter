package com.tietoevry.backend.controller;

import com.tietoevry.backend.model.event.CreateEventForm;
import com.tietoevry.backend.model.event.Event;
import com.tietoevry.backend.service.EventService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/event")
public class EventController {
    private final EventService eventService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Event createEvent(@Valid @RequestBody CreateEventForm createEventForm) {
        return eventService.createEvent(createEventForm);
    }

}
