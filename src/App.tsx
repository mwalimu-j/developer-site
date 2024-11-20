import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import HeroSection from "./components/HeroSection"; // Import HeroSection component
import Footer from "./components/Footer"; // Import Footer component

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contacts";

const App: React.FC = () => {
	const [section, setSection] = useState("Home"); // Set default section to "Home"

	const handleSectionChange = (newSection: string) => {
		setSection(newSection);
	};

	return (
		<div>
			<Navbar onSectionChange={handleSectionChange} />{" "}
			{/* Pass the prop here */}
			<HeroSection
				section={section}
				onSectionChange={handleSectionChange}
			/>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/portfolio"
					element={<Portfolio />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
