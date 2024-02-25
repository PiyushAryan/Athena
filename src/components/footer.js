const Footer = ({ account }) => {
    return (
        <footer className=" bg-gray-800 mx-auto my-auto p-10">
            <p className="font-Montserrat text-xl text-white">
                Metamask Account: {account ? account : "☹️ Please Connect Metamask wallet"}  
            </p>
            <div className="font-Montserrat font-extralight justify-center text-center text-cyan-400">
                Designed and Crafted with <span role="img" className="text-red-500" aria-label="heart">❤️</span> by Piyush & Team
            </div>
        </footer>
    );
};

export default Footer;
