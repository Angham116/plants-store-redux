BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  role VARCHAR,
  email VARCHAR,
  firstname VARCHAR,
  lastname VARCHAR,
  location TEXT
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  price INTEGER NOT NULL,
  image TEXT,
  description TEXT
);

CREATE TABLE user_products (
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES product(id),
  quantity INTEGER
);



COMMIT;
