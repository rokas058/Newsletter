--  liquibase formatted sql
--  changeset milda:1
--  comment: Create user table
create table users
(
    id         bigint auto_increment
        primary key,
    username   varchar(255) not null,
    password   varchar(255) not null
);

create table users_roles
(
    users_id bigint                 not null,
    roles    enum ('ADMIN', 'USER') null,
    constraint FKml90kef4w2jy7oxyqv742tsfc
        foreign key (users_id) references users (id)
);

/* User with password 'password' */
insert into users (id, username, password)
values (1, 'admin', '$2a$10$n/mj3823gVUA5wszZfxdGu2jXPjn5giAW9CXi9k1rW3eKKEnz2fKW');

insert into users_roles (users_id, roles)
values (1, 'ADMIN');
