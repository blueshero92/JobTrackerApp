ALTER TABLE application_users
    ALTER COLUMN role TYPE varchar(50)
        USING role::text;