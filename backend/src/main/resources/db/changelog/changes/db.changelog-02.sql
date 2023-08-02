--  liquibase formatted sql
--  changeset milda:1
--  comment: Create user table
alter table users
add column email varchar(255) NOT NULL UNIQUE,
add column first_name varchar(255) NOT NULL,
add column last_name varchar(255) NOT NULL;

update users
set email='administrator@tietoevry.com', first_name='Admin', last_name='Administrator'
where id=1;

/* User with password 'password' */
insert into users (id, username, password, email, first_name, last_name)
values (2, 'user', '$2a$10$n/mj3823gVUA5wszZfxdGu2jXPjn5giAW9CXi9k1rW3eKKEnz2fKW', 'user@tietoevry.com', 'Test', 'Admin');

insert into users_roles (users_id, roles)
values (2, 'USER');
