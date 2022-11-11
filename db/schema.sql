DROP DATABASE IF EXISTS htmlexercises;

CREATE DATABASE htmlexercises;

\c htmlexercises;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    price integer
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL, 
    password text NOT NULL
);

