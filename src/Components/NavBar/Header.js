import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.webp";
import "./Header.css";

const Header = () => {
	const { isAuthenticated } = useAuth();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	// Navbar shrink on scroll
	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector(".header");
			if (window.scrollY > 50) header.classList.add("shrink");
			else header.classList.remove("shrink");
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="header">
			<div className="container">
				<nav className="nav">
					{/* Logo */}
					<div className="logo">
						<img src={logo} className="logo_img" alt="AyurDiet logo" />
						<span className="logo-text">AyurDiet</span>
					</div>

					{/* Desktop Nav */}
					{!isAuthenticated ? (
						<>
							<ul className="nav-links">
								<li>
									<a href="#features" onClick={closeMobileMenu}>
										Features
									</a>
								</li>
								<li>
									<a href="#how-it-works" onClick={closeMobileMenu}>
										How It Works
									</a>
								</li>
								<li>
									<a href="#pricing" onClick={closeMobileMenu}>
										Pricing
									</a>
								</li>
								<li>
									<a href="#testimonials" onClick={closeMobileMenu}>
										Testimonials
									</a>
								</li>
							</ul>

							<div className="nav-buttons">
								<Link to="/auth" id="loginBtn">
									Login
								</Link>
								<Link to="/auth" id="trialBtn">
									Start Free Trial
								</Link>
							</div>
						</>
					) : (
						<div className="nav-buttons">
							<Link to="/dashboard" id="dashboardBtn">
								Dashboard
							</Link>
						</div>
					)}

					{/* Mobile Menu Icon */}
					<button className="mobile-menu-btn" onClick={toggleMobileMenu}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</nav>

				{/* Mobile Menu */}
				<div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
					{!isAuthenticated ? (
						<>
							<a href="#features" onClick={closeMobileMenu}>
								Features
							</a>
							<a href="#how-it-works" onClick={closeMobileMenu}>
								How It Works
							</a>
							<a href="#pricing" onClick={closeMobileMenu}>
								Pricing
							</a>
							<a href="#testimonials" onClick={closeMobileMenu}>
								Testimonials
							</a>

							<div className="mobile-buttons">
								<Link to="/auth" id="loginBtn" onClick={closeMobileMenu}>
									Login
								</Link>
								<Link to="/auth" id="trialBtn" onClick={closeMobileMenu}>
									Start Free Trial
								</Link>
							</div>
						</>
					) : (
						<div className="mobile-buttons">
							<Link to="/dashboard" id="dashboardBtn" onClick={closeMobileMenu}>
								Dashboard
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
