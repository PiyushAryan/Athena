import Upload from "@/abi/Upload.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import FileUploadComp from "@/pages/FileUploadComp";
import Display from "@/components/Display";
import Modal from "@/components/Modal";
import "@/styles/globals.css";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";



export default function App({ Component, pageProps }) {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      import("ethers").then(({ ethers }) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const loadProvider = async () => {
          try {
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);

            const contractAddress = "0x3bd77D528CC094d6d8310aa6a522E3Edc5Ed4872";
            const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
            console.log("Contract loaded:", contract);
            setContract(contract);
            setProvider(provider);
          } catch (err) {
            console.error("Error connecting to MetaMask:", err);
          }
        };

        loadProvider();
      });
    } else {
      console.error("MetaMask not found or window.ethereum is undefined");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps}
        account={account}
        contract={contract}
        provider={provider} />
      {/* <FileUpload account={account} contract={contract} provider={provider} /> */}
      <Footer account={account} />
    </>
  );
}
