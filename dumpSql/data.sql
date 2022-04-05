CREATE DATABASE IF NOT EXISTS Raiko;

USE Raiko;

CREATE TABLE IF NOT EXISTS creations(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    id_user INT NOT NULL,
    id_role INT, -- not null ?
    date_creation DATETIME NOT NULL ,
    id_category INT NOT NULL,
    id_type INT NOT NULL,
    status BOOLEAN NOT NULL,
    duration_creation SMALLINT NOT NULL,
    voice_creation VARCHAR(40),
    rise_duration TINYINT,
    fall_duration TINYINT,
    hight_intensity TINYINT,
    low_intensity TINYINT,
    color VARCHAR(6),
    music VARCHAR(40),
    picture VARCHAR(40),
    note DECIMAL(3,1),
    nb_note INT
);

CREATE TABLE IF NOT EXISTS users(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(75),
    age TINYINT,
    id_country SMALLINT,
    id_role TINYINT,
    nb_creation SMALLINT
);

CREATE TABLE IF NOT EXISTS country(
    id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(56)
);

CREATE TABLE IF NOT EXISTS role(
    id TINYINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(7)
);

CREATE TABLE IF NOT EXISTS category(
    id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS type(
    id TINYINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);
