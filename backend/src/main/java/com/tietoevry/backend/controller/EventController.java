package com.tietoevry.backend.controller;

import java.util.List;

import com.tietoevry.backend.model.event.Event;
import com.tietoevry.backend.model.event.EventForm;
import com.tietoevry.backend.service.EventService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public Event createEvent(@Valid @RequestBody EventForm eventForm) {
        return eventService.createEvent(eventForm);
    }

    @GetMapping(path = "/all")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping
    public List<Event> getEvents() {
        return eventService.getEvents();
    }

    @GetMapping(path = "/{id}")
    public Event getEvent(@PathVariable Long id) {
        return eventService.getEvent(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(path = "/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody EventForm eventForm) {
        return eventService.editEvent(id, eventForm);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = "/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
    }
}
