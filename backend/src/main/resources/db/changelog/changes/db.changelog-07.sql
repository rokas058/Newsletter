-- liquibase formatted sql
-- changeset Lukas:7
-- comment: Create image table.

CREATE TABLE recommendation
(
    recommendations_id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    newsletter_id      BIGINT                            NOT NULL,
    title              VARCHAR(255)                      NOT NULL,
    media_Type         ENUM ('FILM','BOOK')              NOT NULL,
    FOREIGN KEY (newsletter_id) REFERENCES newsletter (newsletter_id)
);


