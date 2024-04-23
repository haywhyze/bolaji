import { seed } from '@/lib/seed';
import Image from 'next/image';
import Link from 'next/link';

export const runtime = 'edge';
export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    console.log(
      'Checking if the "tributes" table exists in the database...'
    )
    await seed()
    console.log(
      'Table does not exist, creating and seeding it with dummy data now...'
    )
  } catch (e: any) {
    console.error('Error seeding the database:', e)
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-4'>
      <header className='text-center flex flex-col flex-1 items-center justify-center'>
        <Image
          src='/bolaji.jpeg' // Path to the image of the person
          alt='Elder Moses Olusegun Bolaji'
          width={300}
          height={300}
          className='rounded-full margin-auto h-72 w-72 object-cover ring-4 ring-gray-300'
          priority
        />
        <h1 className='text-4xl font-bold mt-8'>
          Remembering Elder Moses Olusegun Bolaji
        </h1>
        <p className='mt-6 text-lg text-gray-600'>
          Join us in celebrating the life and legacy of our loving father by
          sharing your memories and tributes.
        </p>
        <Link
          href='/submit-tribute'
          className='rounded mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer'
        >
          Share Your Memories
        </Link>
      </header>
      <footer className='mt-auto w-full text-center text-sm text-gray-500 pt-10'>
        This tribute is lovingly organized by the children
      </footer>
    </main>
  );
}
