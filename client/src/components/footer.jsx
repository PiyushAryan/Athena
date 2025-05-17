import { ethers } from "ethers";
import Upload from "@/abi/Upload.json";

const Footer = ({ account, setAccount, setContract, setProvider }) => {
  const connectWallet = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        const contractAddress = "0x3bd77D528CC094d6d8310aa6a522E3Edc5Ed4872";
        const contract = new ethers.Contract(contractAddress, Upload.abi, signer);

        setAccount(address);
        setContract(contract);
        setProvider(provider);
      } catch (err) {
        console.error("Failed to connect wallet:", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <footer className="bg-gray-800 mx-auto my-auto p-10 text-center">
      <p className="font-Montserrat text-xl text-white mb-4">
        {account
          ? `Metamask Account: ${account}`
          : "☹️ Please Connect Metamask wallet"}
      </p>

      {!account && (
        <button
          onClick={connectWallet}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-4 hover:bg-blue-700 transition"
        >
          Connect Wallet
        </button>
      )}

      <div className="font-Montserrat font-extralight text-cyan-400">
        Developed and Crafted with{" "}
        <span role="img" className="text-red-500" aria-label="heart">
          ❤️
        </span>{" "}
        by Piyush
      </div>
    </footer>
  );
};

export default Footer;
