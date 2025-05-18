import React from 'react';
import Panel from '@/components/panel';
import { useEffect, useState } from "react";
import WelcomeModal from '@/components/WelcomeModal';




const Home = ({account}) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="relative">
      {showModal && <WelcomeModal account={account} onClose={() => setShowModal(false)} />}

      <div className={`flex bg-black min-h-screen transition duration-300 ${showModal ? 'blur-sm' : ''}`}>
        <Panel />
      </div>
    </div>

  );
};

export default Home;
