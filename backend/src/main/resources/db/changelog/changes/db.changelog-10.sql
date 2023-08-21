--  liquibase formatted sql
--  changeset Lukas:10
--  comment: Create event table.
CREATE TABLE event
(
    event_id   BIGINT AUTO_INCREMENT PRIMARY KEY     NOT NULL,
    title      VARCHAR(255)                          NOT NULL,
    start_date DATE                                  NOT NULL,
    end_date   DATE                                  NOT NULL,
    event_type ENUM ('BIRTHDAY', 'HOLIDAY', 'OTHER') NOT NULL
);





