import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="p-4 bg-blue-600 text-white">
    <ul className="flex space-x-4 justify-center">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
