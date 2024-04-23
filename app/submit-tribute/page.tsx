import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation'
import TributeForm from '../../components/tribute-form';
import Image from 'next/image';

interface Tribute {
  name: string;
  relationship: string;
  message: string;
}

export default function SubmitTribute() {
  const handleSubmit = async (tribute: Tribute) => {
    'use server';
    try {
      const { name, relationship, message } = tribute;
      // Insert the tribute into the database
      await sql`INSERT INTO tributes (name, relationship, message, created_at) VALUES (${name}, ${relationship}, ${message}, NOW())`;
    } catch (error) {
      console.error('Error submitting tribute:', error);
      // alert('Failed to submit the tribute. Please try again.');
    }
    redirect('/thank-you');
  };

  return (
    <div className='container mx-auto px-4 min-h-screen flex flex-col items-center justify-center'>
      <Image
        src='/bolaji.jpeg' // Path to the image of the person
        alt='Elder Moses Olusegun Bolaji'
        width={300}
        height={300}
        className='rounded-full margin-auto h-60 w-60 object-cover ring-4 ring-gray-300'
        priority
      />
      <h1 className='text-xl font-semibold text-center my-6'>
        Submit Your Tribute
      </h1>
      <TributeForm handleSubmit={handleSubmit} />
    </div>
  );
}
