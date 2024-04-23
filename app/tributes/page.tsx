import React from 'react';
import { sql } from '@vercel/postgres';
import { seed } from '@/lib/seed';

const TributesPage: React.FC = async () => {
  let data: any;
  let startTime = Date.now();

  try {
    data = await sql`SELECT * FROM tributes`;
  } catch (e: any) {
    if (e.message.includes('relation "tributes" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      );
      // Table is not created yet
      await seed();
      startTime = Date.now();
      data = await sql`SELECT * FROM tributes`;
    } else {
      throw e;
    }
  }

  const { rows: tributes } = data;
  const duration = Date.now() - startTime;

  return (
    <main className='p-4'>
      <h1 className='text-center text-4xl font-bold my-6'>Tributes</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tributes.map((tribute: any) => (
          <div
            key={tribute.id}
            className='max-w-sm rounded overflow-hidden shadow-lg p-4'
          >
            <h2 className='font-bold text-xl mb-2'>{tribute.name}</h2>
            <p>{tribute.relationship}</p>
            <p className='text-gray-700 text-base'>{tribute.message}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TributesPage;
