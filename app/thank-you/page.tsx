import Image from 'next/image';
// import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <header className="text-center flex flex-col flex-1 items-center justify-center">
        <Image
          src="/bolaji.jpeg" // Ideally, you should replace this with a relevant image or icon
          alt="Elder Moses Olusegun Bolaji"
          width={300}
          height={300}
          className="rounded-full margin-auto h-72 w-72 object-cover ring-4 ring-gray-300"
          priority
        />
        <h1 className="text-4xl font-bold mt-8">
          Thank You!
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Your tribute has been successfully submitted. Thank you for sharing your memories and honoring the legacy of Elder Moses Olusegun Bolaji.
        </p>
        {/* <Link
          href="/tributes"
          className="rounded mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer"
        >
          View Other Tributes
        </Link>
        <Link
          href="/"
          className="rounded mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 cursor-pointer"
        >
          Return to Homepage
        </Link> */}
      </header>
      <footer className="mt-auto w-full text-center text-sm text-gray-500 pt-10">
        This tribute is lovingly organized by the children
      </footer>
    </main>
  );
}
