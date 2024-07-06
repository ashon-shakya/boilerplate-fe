// src/components/layout/Footer.jsx
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Rebb Tech. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;