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

  console.log(`Created "tributes" table`);

  // Insert a single tribute from Yusuf Abdulkarim
  const tribute = await sql`
      INSERT INTO tributes (name, relationship, message)
      VALUES ('Yusuf Abdulkarim', 'Son\'s Friend', 'I did not know him much, but being his son\'s friend, I knew how much he looked up to him and the guidance he provided for my friend to be the man he is now.')
  `;

  console.log(`Seeded tribute from Yusuf Abdulkarim`);

  return {
    createTable,
    tribute,
  }
}