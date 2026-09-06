CREATE SCHEMA IF NOT EXISTS percyphone;

-- Clear tables if they already exist
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS genre;
DROP TABLE IF EXISTS taggedProduct;
DROP TABLE IF EXISTS genredProduct;
DROP TABLE IF EXISTS admin;

-- Create tables
CREATE TABLE product {
    "id" SERIAL PRIMARY KEY UNIQUE NOT NULL,
    "name" VARCHAR(50),
    "description" VARCHAR(1000),
    "price" INT,
    "image" VARCHAR(600),
    "stock" INT,
};

CREATE TABLE tag {
    "id" SERIAL PRIMARY KEY UNIQUE NOT NULL,
    "name" VARCHAR(50)
};

CREATE TABLE genre {
    "id" SERIAL PRIMARY KEY UNIQUE NOT NULL,
    "name" VARCHAR(50)
};

CREATE TABLE taggedProduct {
    "tag_id" INT REFERENCES tag("id") ON DELETE CASCADE,
    "product_id" INT REFERENCES product("id") ON DELETE CASCADE,
    

    PRIMARY KEY ("tag_id", "product_id")
};

CREATE TABLE genredProduct {
    "genre_id" INT REFERENCES genre("id") ON DELETE CASCADE,
    "product_id" INT REFERENCES product("id") ON DELETE CASCADE,
    

    PRIMARY KEY ("genre_id", "product_id")
};

CREATE TABLE admin {
    id,
    name "Percy",
    email "percyphone@gmail.com"

};