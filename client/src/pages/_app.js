import Upload from "../artifacts/contracts/Upload.sol/Upload.json";
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
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xB28E851A8941Cd1419813DA449eD7Ed32134b991";

        const contract = new ethers.Contract(
          contractAddress, Upload.abi, signer
        )
        console.log(contract);
        setContract(contract)
        setProvider(provider)
      }
      else {
        console.error("Metamask is not present in your arsenal");
      }
    };
    provider && loadProvider()
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
