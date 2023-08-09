-- liquibase formatted sql
-- changeset Lukas:6
-- comment: Create section table.
CREATE TABLE section
(
    section_id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    page_id    BIGINT                            NOT NULL,
    title      VARCHAR(255),
    text       TEXT,
    image      MEDIUMBLOB,
    FOREIGN KEY (page_id) REFERENCES page (page_id)
);
