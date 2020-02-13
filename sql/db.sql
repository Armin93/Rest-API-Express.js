CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY,
    note character varying(255) NOT NULL ,
    created_at DATE ,
    updated_at DATE ,
    deleted_at DATE 
);
