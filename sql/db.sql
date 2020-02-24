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

    note_uid UUID PRIMARY KEY,
    note VARCHAR(100) NOT NULL ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS users(
  user_uid UUID NOT NULL PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,

);
insert into notes(note_uid,note) values(uuid_generate_v4(),'hihello');
insert into users(user_uid,email,password) values(uuid_generate_v4(),"arminmheryan@gmail.com","123456");
 
 
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)

INSERT INTO notes (note,created_at)
VALUES('arminmheryan@gmail.com','12-02-2020')

create table car(
  car_uid UUID NOT NULL PRIMARY KEY,
  make VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  price NUMERIC(19,2) NOT NULL CHECK(price>0)
);
 
I
\ No newline at end of file
create table person(
person_uid UUID NOT NULL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
gender VARCHAR(7) NOT NULL,
email VARCHAR(100),
date_of_birth DATE NOT NULL,
country_of_birth VARCHAR(50) NOT NULL,
car_uid UUID REFERENCES car(car_uid),
UNIQUE(car_uid),
UNIQUE(email));


CREATE TRIGGER set_timestamp
BEFORE UPDATE ON list
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.update_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


I