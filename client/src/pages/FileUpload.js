import { useState } from "react";
import axios from "axios";
import Display from "@/components/Display";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");

  const handleSubmit = async (e) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key:  process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account, ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
        // console.log(e);
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
  // <div className="relative bg-gradient-to-r from-red-500 to-blue-500 transform scale-[0.80] bg-teal-500 rounded-full blur-3xl">
    <div className="h-auto md:h-[42rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto p-14">
      <form onSubmit={handleSubmit} className="relative z-5">
        <label htmlFor="file-upload">
          Choose Image
        </label>
        <input 
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span>Image: {fileName}</span>
        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" disabled={!file}>
          Upload File
        </button>
      </form>
     </div>

  );
};
export default FileUpload;

