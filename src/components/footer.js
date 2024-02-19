import React from 'react';

const Footer = ({ account }) => {
    return (
        <footer>
            <p className="font-Montserrat text-xl text-white bg-gray-800">
                Account: {account ? account : "☹️ Please Connect Metamask wallet"}
            </p>
        </footer>
    );
};

export default Footer;
