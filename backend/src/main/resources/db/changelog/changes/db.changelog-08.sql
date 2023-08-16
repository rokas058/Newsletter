-- liquibase formatted sql
-- changeset Rokas:7
-- comment: Update recommendation table.

ALTER TABLE recommendation
    ADD COLUMN api_id BIGINT NOT NULL;


