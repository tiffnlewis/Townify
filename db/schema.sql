DROP DATABASE IF EXISTS townify_db;
CREATE DATABASE townify_db;

USE townify_db;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    user_name varchar(255),
    user_password varchar(255),
    user_email varchar(255),
    user_phone integer(20),
    PRIMARY KEY (id)
);

create table leaflet(
    id int not null AUTO_INCREMENT,
    title varchar(255),
    summary varchar(600),
    est_time integer(10),
    primary key (id)
    
)