-- Create Attempts table

DROP TABLE IF EXISTS attempts CASCADE;
CREATE TABLE attempts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  quiz_id INTEGER REFERENCES quiz(id) ON DELETE CASCADE,
  attempted_at TIMESTAMP DEFAULT NOW(),
  attempt_url VARCHAR(10) UNIQUE NOT NULL
);