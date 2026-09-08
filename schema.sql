CREATE SCHEMA IF NOT EXISTS percyphone;

SET search_path TO percyphone;

-- Clear tables if they already exist
DROP TABLE IF EXISTS product CASCADE;
DROP TABLE IF EXISTS tag CASCADE;
DROP TABLE IF EXISTS tagged_product CASCADE;
DROP TABLE IF EXISTS admin CASCADE;
DROP TABLE IF EXISTS event CASCADE;

-- Create tables
CREATE TABLE product(
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(50),
    description VARCHAR(1000),
    price INT,
    image VARCHAR(600),
    stock INT,
    is_clown BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE tag (
    id SERIAL PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(50),
    is_section BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE tagged_product (
    tag_id INT REFERENCES tag(id) ON DELETE CASCADE,
    product_id INT REFERENCES product(id) ON DELETE CASCADE,
    PRIMARY KEY (tag_id, product_id)
);

CREATE TABLE event (
    event_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(500),
    table_num VARCHAR(50)
);

CREATE TABLE admin (
    id SMALLINT PRIMARY KEY CHECK (id = 1),
    username VARCHAR(100) NOT NULL DEFAULT 'PercyPhone',
    name VARCHAR(100) NOT NULL DEFAULT 'Percy',
    email VARCHAR(255) NOT NULL UNIQUE DEFAULT 'percyphone@gmail.com',
    password_hash VARCHAR(255) NOT NULL 
);

-- create Admin
INSERT INTO admin (id, username, name, email, password_hash)
VALUES (
    1, 
    'PercyPhone',
    'Percy', 
    'percyphone@gmail.com', 
    '$2b$10$S6IY0dvqZx0SWGcvFboeouMFC2qZel4dpIXwskYC/KvBYBKyL5zOy'
);