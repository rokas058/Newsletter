--  liquibase formatted sql
--  changeset Lukas:3
--  comment: Create newsletter and page table.
CREATE TABLE newsletter
(
    newsletter_id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    publishDate   DATETIME                          NOT NULL,
    isPublished   BOOLEAN                           NOT NULL DEFAULT FALSE
);

CREATE TABLE page
(
    page_id       BIGINT                                                                                                           NOT NULL AUTO_INCREMENT PRIMARY KEY,
    newsletter_id BIGINT                                                                                                           NOT NULL,
    title         VARCHAR(255)                                                                                                     NOT NULL,
    type          ENUM ('hr-front','off-topic', 'star', 'news', 'jobs', 'calender', 'travels', 'recommendations', 'announcements') NOT NULL,
    FOREIGN KEY (newsletter_id) REFERENCES newsletter (newsletter_id)
);



