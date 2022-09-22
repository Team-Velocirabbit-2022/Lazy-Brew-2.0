--   CREATE DATABASE
  CREATE TABLE user_account (
    _id SERIAL PRIMARY KEY ,
    user_name  VARCHAR(50) UNIQUE NOT NULL,
    password  VARCHAR(50) NOT NULL,
    email  VARCHAR(255) UNIQUE NOT NULL,
  );