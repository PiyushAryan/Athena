import React from 'react';
import Panel from '@/components/panel';
import { useEffect, useState } from "react";
import WelcomeModal from '@/components/WelcomeModal';




const Home = ({ account }) => {
  const [showModal, setShowModal] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleClose = () => {
    setIsFading(true);
    setTimeout(() => {
      setShowModal(false);
      setIsFading(false);
    }, 300);

  };


  return (
    <div className="relative">
      {showModal && <WelcomeModal isFading={isFading} account={account} onClose={handleClose} />}

      <div className={`flex bg-black min-h-screen duration-300 ${!isFading && showModal ? 'blur-sm' : ''}`}>
        <Panel />
      </div>
    </div>

  );
};

export default Home;
