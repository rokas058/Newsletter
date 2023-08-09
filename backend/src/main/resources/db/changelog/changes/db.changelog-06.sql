-- liquibase formatted sql
-- changeset Lukas:7
-- comment: Create image table.


CREATE TABLE image
(
    image_id   BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    section_id BIGINT                            NOT NULL,
    image      MEDIUMBLOB                        NOT NULL,
    FOREIGN KEY (section_id) REFERENCES section (section_id)
);

-- ALTER TABLE section DROP COLUMN image;
