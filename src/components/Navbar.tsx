// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
	onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = (section: string) => {
		onSectionChange(section);
		setIsOpen(false); // Close menu on selection in small screens
	};

	return (
		<nav className="bg-gray-800 text-white">
			<div className="container mx-auto flex items-center justify-between p-4">
				<div className="text-2xl font-bold">home  of websites</div>
				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-6">
					{["About", "Contacts", "Services", "Portfolio"].map((item) => (
						<Link
							key={item}
							to={`/${item.toLowerCase()}`}
							className="hover:text-yellow-400"
							onClick={() => handleLinkClick(item)}
						>
							{item}
						</Link>
					))}
				</div>
				{/* Hamburger Menu Icon for Mobile */}
				<div className="md:hidden flex items-center">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="focus:outline-none text-white"
					>
						{isOpen ? (
							<span className="material-icons">close</span>
						) : (
							<span className="material-icons">menu</span>
						)}
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden flex flex-col items-center bg-gray-700 py-4 space-y-4">
					{["About", "Contacts", "Services", "Portfolio"].map((item) => (
						<Link
							key={item}
							to={`/${item.toLowerCase()}`}
							className="hover:text-yellow-400"
							onClick={() => handleLinkClick(item)}
						>
							{item}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
