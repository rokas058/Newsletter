-- liquibase formatted sql
-- changeset Rokas:7
-- comment: Modify recommendation table.
ALTER TABLE recommendation
    MODIFY COLUMN api_id VARCHAR(255) NOT NULL;




