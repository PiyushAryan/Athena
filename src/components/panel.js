import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card.js";


function Panel() {



  return (
    <div className="flex items-center justify-center h-screen">
      <div className="font-Montserrat text-5xl text-teal-700 ml-10 mb-12 font-black text-left">
        <TextRevealCard
          text="Empower Your Data, Unleash"
          revealText="Athena - Web3 Cloud Storage" />
        <p className="border max-w-[40vw] border-transparent text-sm bg-teal-50 font-Inter text-opacity-80 text-gray-900 font-face">Store, share and access all your files in one platform</p>
        <p className="text-sm ml-10 bg-gradient-to-l from-red-500 via-blue-600 to-yellow-700 text-transparent bg-clip-text max-w-[50vw]"> Athena offers decentralized cloud storage powered by Web3, ensuring security, privacy, and accessibility. Data is distributed across a network, eliminating reliance on centralized servers. With end-to-end encryption and community governance, users retain control over their data. Experience Athena for secure, decentralized storage solutions in the Web3 era.</p>
        <br />
        {/* <button type="button" className="text-teal-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
          <img src="metamask.svg" alt="metamask" className="w-6 h-5 me-2 ms-1 aria-hidden:" /> Connect with MetaMask
        </button> */}
      </div>
      <p >
         
        </p>
    </div>
  );
}

export default Panel;
