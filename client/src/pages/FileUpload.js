import { useState } from "react";
import axios from "axios";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      const resFile = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
      await contract.add(account, ImgHash);
      
      alert("Successfully uploaded image");
      setFileName("No image selected");
      setFile(null);
    } catch (e) {
      console.error("Upload error:", e);
      alert("Unable to upload image to Pinata");
    }
  };

  const retrieveFile = (e) => {
    e.preventDefault();
    const data = e.target.files[0];
    if (data) {
      setFile(data);
      setFileName(data.name);
    }
  };

  return (
    <div className="h-auto md:h-[42rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto p-14">
      <form onSubmit={handleSubmit} className="relative z-5">
        <label htmlFor="file-upload">Choose Image</label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
          accept="image/*"
        />
        <span>Image: {fileName}</span>
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          disabled={!file || !account}
        >
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;