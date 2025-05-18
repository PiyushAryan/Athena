const Footer = ({ account }) => {
    return (
        <footer className="bg-[#171717] px-6 py-10 text-center text-white font-Montserrat">
            <p className="text-sm md:text-xl mb-4">
                Metamask Account:{' '}
                <span className={account ? "text-green-400" : "text-red-400"}>
                    {account || "☹️ Please connect your Metamask wallet"}
                </span>
            </p>
            <p className="text-sm text-cyan-400 font-light">
                Crafted with <span role="img" aria-label="heart" className="text-red-500">❤️</span> by <span className="font-medium text-white hover:text-cyan-500 "><a href="https://pflix.vercel.app">Piyush</a></span>
            </p>
        </footer>
    );
};

export default Footer;

