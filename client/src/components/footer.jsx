const Footer = ({ account }) => {
    return (
        <footer className=" bg-black
         mx-auto my-auto p-10">
            <p className="font-Montserrat text-xl text-white">
                Metamask Account: {account ? account : "☹️ Please Connect Metamask wallet"}  
            </p>
            <div className="font-Montserrat font-extralight justify-center text-center text-cyan-400">
                Developed and Crafted with <span role="img" className="text-red-500" aria-label="heart">❤️</span> by Piyush
            </div>
        </footer>
    );
};

export default Footer;
