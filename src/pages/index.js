import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/sidebar';
import Panel from '@/components/panel';



const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex">
        <Panel />
        <Sidebar />
      </div>
    </div>

  );
};

export default Home;
