import React from 'react';
import { sql } from '@vercel/postgres';
import { formatDistanceToNow } from 'date-fns';
import { seed } from '@/lib/seed';

export const dynamic = 'force-dynamic'

interface Tribute {
  id: number;
  name: string;
  relationship: string;
  message: string;
  created_at: string;
}

const TributesPage: React.FC = async () => {
  let data: any;

  try {
    data = await sql`SELECT * FROM tributes`;
  } catch (e: any) {
    if (e.message.includes('relation "tributes" does not exist')) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      );
      // Table is not created yet
      await seed();
      data = await sql`SELECT * FROM tributes`;
    } else {
      throw e;
    }
  }

  const { rows: tributes } = data;

  tributes.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <main className='p-4 min-h-screen'>
      <h1 className='text-center text-4xl font-bold my-6'>Tributes</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tributes.map((tribute: Tribute) => (
          <div
            key={tribute.id}
            className='max-w-sm bg-white rounded-lg overflow-hidden shadow-lg p-4'
          >
            <h2 className='font-bold text-xl mb-2'>{tribute.name}</h2>
            <p className='italic text-lg'>{tribute.relationship}</p>
            <p className='text-gray-700 text-base'>{tribute.message}</p>
            <p className='text-gray-400 text-sm'>
              {formatDistanceToNow(new Date(tribute.created_at))} ago
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TributesPage;
