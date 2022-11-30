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
    username text NOT NULL UNIQUE,
    email text NOT NULL UNIQUE, 
    password text NOT NULL
);

CREATE TABLE email_subscriptions (
    id SERIAL PRIMARY KEY, 
    firstname text,
    email text NOT NULL UNIQUE
);

