import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar"; // Import Navbar component
import HeroSection from "./components/HeroSection"; // Import HeroSection
import Footer from "./components/Footer"; // Import Footer component

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App: React.FC = () => (
  <div>
    <Navbar /> {/* Navbar is outside Routes */}
    <HeroSection /> {/* Hero Section */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer /> {/* Footer Section */}
  </div>
);

export default App;
