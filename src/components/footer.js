import React from 'react';

const Footer = ({ account }) => {
    return (
        <footer>
            <p className="font-Montserrat text-teal-800 bg-teal-100 text-xl">
                Account: {account ? account : "☹️ Please Connect Metamask wallet"}
            </p>
        </footer>
    );
};

export default Footer;
