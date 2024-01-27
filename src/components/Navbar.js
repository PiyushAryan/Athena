import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar bg-orange-400 backdrop-blur-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold text-white">
            <img className="h-20 w-auto" src='athena-logo.svg' alt='athena-logo'></img>
            
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">
            <a className="text-black hover:text-orange-800 mr-4">Home</a>
          </Link>
          <Link href="/upload">
            <a className="text-black hover:text-orange-800">Upload</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
