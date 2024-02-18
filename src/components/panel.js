import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card.js";


const Panel = () => {

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="font-Montserrat text-5xl text-teal-700 ml-10 mb-12 font-black text-left">
        <TextRevealCard text="Empower Your Data, Unleash" revealText="Athena - Web3 Cloud Storage" />
        <span className="border border-transparent text-sm bg-teal-50 font-Inter text-opacity-80 text-gray-900 font-face">Store, share and access all your files in one platform</span>
        <br />
        <button type="button" className="text-teal-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
          <img src="metamask.svg" alt="metamask" className="w-6 h-5 me-2 ms-1 aria-hidden:" /> Connect with MetaMask
        </button>
      </h1>
    </div>
  );
};

export default Panel;
