drop table if exists movielist;
create table if not exists movielist(
    id serial primary key,
    title varchar(255),
    releasedate varchar(255),
    posterpath VARCHAR(255),
    overview varchar(255)
);