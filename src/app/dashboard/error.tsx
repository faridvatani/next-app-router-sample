"use client";
import Link from "next/link";
import { FC } from "react";

interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  return (
    <main className='grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-red-50'>
      <div className='text-center'>
        <p className='text-base font-semibold text-red-700 dark:text-red-500'>
          There was a problem
        </p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl'>
          {error.message || "Something went wrong"}
        </h1>
        <p className='mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
          Please try again later or contact support if the problem presists.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <button
            onClick={reset}
            type='button'
            className='inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-300 hover:bg-gray-50 hover:text-red-500'
          >
            Try again
          </button>
          <Link href='/' className='text-gray-400'>
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default error;
