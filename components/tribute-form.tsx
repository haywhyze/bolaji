'use client';

import { useState } from 'react';

export default function SubmitTribute({
  handleSubmit,
}: {
  handleSubmit: (tribute: {
    name: string;
    relationship: string;
    message: string;
  }) => void;
}) {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form onSubmit={
      (event) => {
        event.preventDefault();
        // basic form validation
        if (!name || !relationship || !message) {
          alert('Please fill in all fields');
          return;
        }
        // restrict text length
        if (name.length > 255 || relationship.length > 255) {
          alert('Name and Relationship must not exceed 255 characters');
          return;
        }
        if (message.length > 1000) {
          alert('Message must not exceed 1000 characters');
          return;
        }
        handleSubmit({
          name,
          relationship,
          message,
        });
      }
    } className='max-w-xl w-full mx-auto space-y-4'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Your Name
        </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        />
      </div>
      <div>
        <label
          htmlFor='relationship'
          className='block text-sm font-medium text-gray-700'
        >
          Your Relationship with Elder Moses
        </label>
        <input
          type='text'
          id='relationship'
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white border shadow-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        />
      </div>
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-700'
        >
          Your Tribute
        </label>
        <textarea
          id='message'
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        ></textarea>
      </div>
      <button
        type='submit'
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Submit Tribute
      </button>
    </form>
  );
}
