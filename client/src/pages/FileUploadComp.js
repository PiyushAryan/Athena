import { useState } from "react";
import axios from "axios";
import { FileUpload } from "@/components/ui/file-upload";

const FileUploadComp = ({ contract, account }) => {
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
    let selectedFile;
    if (e?.target?.files?.length > 0) {
      selectedFile = e.target.files[0];
    } else if (Array.isArray(e) && e.length > 0) {
      selectedFile = e[0];
    } else if (e?.file) {
      selectedFile = e.file;
    }

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      alert("No file selected");
    }
  };

  return (
    <div className="bg-white bg-opacity-90 h-auto md:h-[42rem] w-full max-w-4xl min-h-96 rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto p-14">
      <form onSubmit={handleSubmit} className="relative z-5 flex flex-col items-center space-y-4">
        <FileUpload onChange={retrieveFile} />
        <span>Image: {fileName}</span>
        <button
          type="submit"
          className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50"
          disabled={!file || !account}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUploadComp;
