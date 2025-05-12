import { Link } from 'react-router';
import type { Route } from './+types/_index';
import { Code, Globe2 } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Reminder - Quran & Hadith' },
    {
      name: 'description',
      content: 'Quran, Hadith, and more available as a smarter app and powerful API.',
    },
  ];
}

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 bg-white'>
       <h1 className="relative z-10 inline-block bg-gradient-to-r from-black to-neutral-600 bg-clip-text px-2 text-4xl font-semibold leading-tight tracking-tighter text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            reminder
          </h1>
      <p className='text-neutral-600 text-balance text-lg sm:text-xl mb-6 sm:mb-8 md:mb-10 text-center'>
        Quran, Hadith, and more available as a smarter app and powerful API.
      </p>

      <div className='flex flex-col gap-3 w-full max-w-xs sm:max-w-sm md:max-w-md'>
        <Link
          to='/quran'
          className='flex flex-row gap-2 sm:gap-4 items-center justify-start py-2.5 sm:py-3 px-4 sm:px-5 w-full rounded-lg border border-neutral-900 bg-neutral-900 text-white hover:opacity-80 transition-all duration-200 cursor-pointer'
        >
          <Globe2 className='size-4' />
         <div>
           <div className='font-medium mr-1'>Explore the App</div>
          <div className='hidden lg:inline text-sm'>Read Quran, Hadith, and more.</div>
         </div>
        </Link>
        <Link
          to='/api'
          className='bg-white flex flex-row gap-2 sm:gap-3 items-center justify-start text-black py-2.5 sm:py-3 px-4 sm:px-5 w-full rounded-lg border border-neutral-500 hover:bg-neutral-100 hover:border-neutral-600 hover:text-neutral-900 transition-all duration-200 cursor-pointer'
        >
          <Code className='size-4' />
          <div>
           <div className='font-medium mr-1'>View API Docs</div>
          <div className='hidden lg:inline text-sm'>Free API for structured Islamic texts.</div>
         </div>
        </Link>
      </div>
    </div>
  );
}
