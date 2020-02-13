CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY,
    note character varying(255) NOT NULL ,
    created_at DATE ,
    updated_at DATE ,
    deleted_at DATE 
);

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

I