-- initdb.sql
-- ===========================================
-- Initialization script for PostgreSQL DB
-- ===========================================

-- Create table: users
-- CREATE TABLE IF NOT EXISTS users (
--     id   VARCHAR(100) PRIMARY KEY,
--     name VARCHAR(100)
-- );

-- Create table: translation_wb_logs
CREATE TABLE IF NOT EXISTS translation_wb_logs (
    id           SERIAL PRIMARY KEY,
    user_id      VARCHAR(100) NOT NULL,
    action       VARCHAR(50),
    timestamp    TIMESTAMP,
    success      BOOLEAN,
    file_options JSONB
);
