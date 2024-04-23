import { sql } from '@vercel/postgres'

export async function seed() {
  // Create the tributes table if it does not already exist
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS tributes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      relationship VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `

  return {
    createTable,
  }
}