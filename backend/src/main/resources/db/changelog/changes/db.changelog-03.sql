--  liquibase formatted sql
--  changeset Lukas:3
--  comment: Create newsletter and page table.
CREATE TABLE newsletter
(
    newsletter_id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title         VARCHAR(255)                      NOT NULL,
    publish_date  DATE                              NOT NULL,
    is_published  BOOLEAN                           NOT NULL DEFAULT FALSE
);

CREATE TABLE page
(
    page_id       BIGINT                                                                                                           NOT NULL AUTO_INCREMENT PRIMARY KEY,
    newsletter_id BIGINT                                                                                                           NOT NULL,
    title         VARCHAR(255)                                                                                                     NOT NULL,
    type          ENUM ('HR_FRONT','OFF_TOPIC', 'STAR', 'NEWS', 'JOBS', 'CALENDER', 'TRAVELS', 'RECOMMENDATIONS', 'ANNOUNCEMENTS') NOT NULL,
    FOREIGN KEY (newsletter_id) REFERENCES newsletter (newsletter_id)
);



