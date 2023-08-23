--  liquibase formatted sql
--  changeset Rokas:11
--  comment: Drop column event type.
ALTER TABLE event
    DROP COLUMN event_type;





