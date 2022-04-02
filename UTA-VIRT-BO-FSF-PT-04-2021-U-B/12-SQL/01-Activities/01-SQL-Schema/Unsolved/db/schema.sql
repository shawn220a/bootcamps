DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE books(
    id INTEGER NOT NULL,
    book_name VARCHAR(30),
    price DECIMAL(10,2),
    in_stock BOOLEAN
);

DESCRIBE books;