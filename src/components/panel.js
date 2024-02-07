import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import _app from '@/pages/_app';

const Panel = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate web app load delay
    const delay = setTimeout(() => {
      setLoaded(true);
    }, 200);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={`flex items-center justify-center h-screen transition-transform ${loaded ? 'translate-x-0' : '-translate-x-full'}`}>
      <h1 className="font-Montserrat text-5xl text-teal-700 ml-10 mb-12 font-black text-left">Empower Your Data, Unleash
        <br />
        <Link href="#"><span className="text-6xl hover:font-semibold text-start text-red-500">A</span>
        <span className="text-6xl text-start hover:font-semibold text-yellow-600">th</span>
        <span className='text-6xl text-start hover:font-semibold text-blue-700'>ena</span>
        </Link>
        <br />
        Web3 Cloud Storage
        <br />
        <span className='border border-transparent text-sm bg-teal-50 font-Inter text-opacity-80 text-gray-900 font-face'>Store, share and access all your files in one platform</span>
        <br />
        <button type='button' className='text-teal-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800
          dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'> <img src='metamask.svg' alt='metamask' className='w-6 h-5 me-2 ms-1 aria-hidden:' /> Connect with MetaMask
        </button>
        </h1>

    </div>
  );
  
};

export default Panel