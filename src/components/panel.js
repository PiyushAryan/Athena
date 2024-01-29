import React, { useEffect, useState } from 'react';

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
      <h1 className="font-sans text-5xl text-teal-700 pl-10 pb-10 font-black text-left">Empower Your Data, Unleash
        <br />
        <span className="text-6xl text-start text-red-500">A</span>
        <span className="text-6xl text-start text-yellow-600">th</span>
        <span className='text-6xl text-start text-blue-700'>ena</span>
        <br />
        Web3 Cloud Storage
        <div className='text-sm text-opacity-80 text-gray-900'>Store, share and access all your files in one platform</div>
        </h1>
        
    </div>
    
  );
};

export default Panel