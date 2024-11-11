import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4">© 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <p className="text-sm">
          <a href="mailto:smwajo2212@ueab.ac.ke" className="text-sky-400 hover:text-white">
            smwajo2212@ueab.ac.ke
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
