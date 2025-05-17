import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import { Meteors } from "./ui/meteors";
import { FileUpload } from "@/components/ui/file-upload";


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
        <div className="ml-20 px-10">
          <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="flex items-center justify-center mb-4">
              </div>

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                UPLOAD YOUR FILE
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                <img src="/upload.png" width={100} height={100} alt="upload" className='font-Inter  bg-transparent shadow-lg ml-14' />

                Choose a file to upload to the Athena network
              </p>
              <Link href="/FileUploadComp">
                <button className="border mx-12 px-5 hover:bg-slate-400 hover:text-teal- py-1 rounded-lg font-Montserrat border-gray-500 text-gray-300">
                  Upload file
                </button>
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel;
