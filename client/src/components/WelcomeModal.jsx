import React, { useState } from 'react';
import { CircleX } from 'lucide-react';

function WelcomeModal({ onClose }) {


    return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
  <div className="relative w-[480px] max-w-full bg-black rounded-lg p-6 text-slate-50 shadow-lg border border-gray-600">

        
    <button
      className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
      onClick={onClose}
      aria-label="Close"
      type="button"
    >
      <CircleX size={24} />
    </button>
    <div className="flex items-center justify-center mb-6 space-x-3">
      <img src="/athena-logo.svg" alt="Athena Logo" className="h-10 mt-1" />
      <h1 className='font-bold'>X</h1>
      <img src="/metamask.svg" alt="MetaMask Logo" className="h-10" />
    </div>

    <p className="font-Inter font-normal text-justify mb-4">
      This app requires the <span className="font-semibold hover:text-yellow-500 text-[#F89C35]"><a href='https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'>MetaMask Wallet extension</a></span> to be installed. Please ensure you're connected to the <span className="font-semibold text-white">Ethereum Sepolia testnet</span> in MetaMask to access full functionality.
    </p>

    <div className="font-Inter font-normal text-justify text-sm text-gray-400 mb-6">
      <span className="text-red-500 font-medium">Note:</span> This is a test version of the app. Do not upload any sensitive data.
    </div>

    <p className="mb-6">
      For free demo Ethereum, click <a
        href="https://cloud.google.com/application/web3/faucet/ethereum"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline font-medium hover:text-blue-300 transition"
      >here</a>.
    </p>

   
  </div>
</div>


    );
}

export default WelcomeModal;