--  liquibase formatted sql
--  changeset rokas:1
--  comment: Update user table
alter table users
add column birthday DATE ,
add column confirm_birthday boolean NOT NULL;

update users
set birthday=DATE("2020-02-02"), confirm_birthday=0;

alter table users
modify column birthday DATE not null ;

