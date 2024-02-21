import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import Button from './ui/moving-border';


function Panel() {
  return (
    <>
    <div className="flex items-center text-center h-screen">
      <div className="font-Montserrat text-5xl text-teal-700 ml-10 mb-12 font-black text-left">
        <TextRevealCard
          text="Empower Your Data, Unleash"
          revealText="Athena - Web3 Cloud Storage" />
        <p className="bg-transparent ml-10 mb-2 max-w-[40vw] text-sm bg-black font-Inter text-opacity-80 text-gray-100 font-face">Store, share and access all your files in one platform</p>
        <p className="text-sm ml-10 text-justify font-Inter bg-gradient-to-l from-red-500 via-blue-600 to-yellow-700 text-transparent bg-clip-text max-w-[50vw]"> Athena offers decentralized cloud storage powered by Web3, ensuring security, privacy, and accessibility. Data is distributed across a network, eliminating reliance on centralized servers. With end-to-end encryption and community governance, users retain control over their data. Experience Athena for secure, decentralized storage solutions in the Web3 era.</p>
        <br />
      </div>
      <Link href="/FileUpload">
      <Button
        borderRadius="1.75rem"
        className="bg-black text-white hover:bg-blue-200 hover:text-teal-950 hover:font-extrabold border-teal-900 font-Inter">
        Upload
      </Button>
      </Link>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white hover:text-teal-950 hover:font-extrabold hover:bg-white border-teal-800 font-Inter">
        Download
      </Button>
    </div>
      
    </>
  );
}

export default Panel;
