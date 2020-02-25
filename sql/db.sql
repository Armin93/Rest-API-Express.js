CREATE TABLE IF NOT EXISTS notes(
    note_uid UUID PRIMARY KEY,
    note VARCHAR(100) NOT NULL ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users(
  user_uid UUID NOT NULL PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);
insert into notes(note_uid,note) values(uuid_generate_v4(),'hihello');
insert into users(user_uid,email,password) values(uuid_generate_v4(),'arminmheryan@gmail.com',crypt('12345', gen_salt('bf', 8)));
 
 
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