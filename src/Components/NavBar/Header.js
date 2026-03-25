import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.webp";

const Header = () => {
	const { isAuthenticated } = useAuth();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isShrunk, setIsShrunk] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	// Navbar shrink on scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) setIsShrunk(true);
			else setIsShrunk(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`fixed top-0 left-0 right-0 transition-all duration-[0.3s] ease z-[1000] backdrop-blur-[12px] border-b border-[rgba(220,220,220,0.45)] ${isShrunk ? "py-[0.6rem] bg-[rgba(255,255,255,0.548)]" : "py-[1.1rem] bg-[rgba(255,255,255,0.461)]"}`}>
			<div className="container">
				<nav className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center text-[1.55rem] font-[700] text-[#2d5a27]">
						<img src={logo} className="w-[2.4rem] h-[2.4rem] mr-[0.5rem]" alt="AyurDiet logo" />
						<span>AyurDiet</span>
					</div>

					{/* Desktop Nav */}
					{!isAuthenticated ? (
						<>
							<ul className="flex gap-[2.2rem] max-[768px]:hidden list-none p-0 m-0">
								<li>
									<a href="#features" className="text-[#333] no-underline font-[500] relative transition-[0.3s] hover:text-[#2d5a27] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[3px] after:bg-[#2d5a27] after:transition-[0.3s] after:ease after:rounded-[10px] hover:after:w-full" onClick={closeMobileMenu}>
										Features
									</a>
								</li>
								<li>
									<a href="#how-it-works" className="text-[#333] no-underline font-[500] relative transition-[0.3s] hover:text-[#2d5a27] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[3px] after:bg-[#2d5a27] after:transition-[0.3s] after:ease after:rounded-[10px] hover:after:w-full" onClick={closeMobileMenu}>
										How It Works
									</a>
								</li>
								<li>
									<a href="#pricing" className="text-[#333] no-underline font-[500] relative transition-[0.3s] hover:text-[#2d5a27] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[3px] after:bg-[#2d5a27] after:transition-[0.3s] after:ease after:rounded-[10px] hover:after:w-full" onClick={closeMobileMenu}>
										Pricing
									</a>
								</li>
								<li>
									<a href="#testimonials" className="text-[#333] no-underline font-[500] relative transition-[0.3s] hover:text-[#2d5a27] after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[3px] after:bg-[#2d5a27] after:transition-[0.3s] after:ease after:rounded-[10px] hover:after:w-full" onClick={closeMobileMenu}>
										Testimonials
									</a>
								</li>
							</ul>

							<div className="flex gap-[26px] items-center max-[768px]:hidden">
								<Link to="/auth" className="py-[0.65rem] px-[1.3rem] rounded-[12px] font-[600] text-[0.95rem] min-h-[44px] flex items-center justify-center transition-[0.25s] ease cursor-pointer bg-white border-2 border-[#2d5a27] text-[#2d5a27] hover:bg-[#2d5a27] hover:text-white hover:-translate-y-[2px] no-underline">
									Login
								</Link>
								<Link to="/auth" className="py-[0.65rem] px-[1.3rem] rounded-[12px] font-[600] text-[0.95rem] min-h-[44px] flex items-center justify-center transition-[0.25s] ease cursor-pointer bg-[#2d5a27] border-2 border-[#2d5a27] text-white no-underline hover:bg-[rgb(23,118,48)] hover:text-white hover:-translate-y-[2px]">
									Start Free Trial
								</Link>
							</div>
						</>
					) : (
						<div className="flex gap-[26px] items-center max-[768px]:hidden">
							<Link to="/dashboard" className="py-[0.65rem] px-[1.3rem] rounded-[12px] font-[600] text-[0.95rem] min-h-[44px] flex items-center justify-center transition-[0.25s] ease cursor-pointer bg-[#2d5a27] border-2 border-[#2d5a27] text-white no-underline hover:bg-[#1a8f3a] hover:-translate-y-[2px]">
								Dashboard
							</Link>
						</div>
					)}

					{/* Mobile Menu Icon */}
					<button className="hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer max-[768px]:flex" onClick={toggleMobileMenu}>
						<span className="w-[26px] h-[3px] bg-[#2d5a27] transition-[0.3s] ease"></span>
						<span className="w-[26px] h-[3px] bg-[#2d5a27] transition-[0.3s] ease"></span>
						<span className="w-[26px] h-[3px] bg-[#2d5a27] transition-[0.3s] ease"></span>
					</button>
				</nav>

				{/* Mobile Menu */}
				<div className={`absolute top-full left-0 right-0 bg-white p-[1.2rem] rounded-b-[16px] hidden flex-col gap-[1rem] transition-all duration-[0.35s] ease max-[768px]:flex ${isMobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-[25px] opacity-0 invisible"}`}>
					{!isAuthenticated ? (
						<>
							<a href="#features" className="text-[1.1rem] py-[0.6rem] border-b border-[#eee] text-[#333] no-underline" onClick={closeMobileMenu}>
								Features
							</a>
							<a href="#how-it-works" className="text-[1.1rem] py-[0.6rem] border-b border-[#eee] text-[#333] no-underline" onClick={closeMobileMenu}>
								How It Works
							</a>
							<a href="#pricing" className="text-[1.1rem] py-[0.6rem] border-b border-[#eee] text-[#333] no-underline" onClick={closeMobileMenu}>
								Pricing
							</a>
							<a href="#testimonials" className="text-[1.1rem] py-[0.6rem] border-b border-[#eee] text-[#333] no-underline" onClick={closeMobileMenu}>
								Testimonials
							</a>

							<div className="flex flex-col gap-[1rem]">
								<Link to="/auth" className="w-full text-center py-[0.65rem] px-[1.3rem] rounded-[12px] font-[600] text-[0.95rem] min-h-[44px] flex items-center justify-center transition-[0.25s] ease cursor-pointer bg-white border-2 border-[#2d5a27] text-[#2d5a27] hover:bg-[#2d5a27] hover:text-white no-underline" onClick={closeMobileMenu}>
									Login
								</Link>
								<Link to="/auth" className="w-full text-center py-[0.65rem] px-[1.3rem] rounded-[12px] font-[600] text-[0.95rem] min-h-[44px] flex items-center justify-center transition-[0.25s] ease cursor-pointer bg-[#2d5a27] border-2 border-[#2d5a27] text-white no-underline hover:bg-[rgb(23,118,48)]" onClick={closeMobileMenu}>
									Start Free Trial
								</Link>
							</div>
						</>
					) : (
						<div className="flex flex-col gap-[1rem]">
							<Link to="/dashboard" className="w-full text-center py-[0.65rem] px-[1.3rem] rounded-[12px] font-[600] text-[0.95rem] min-h-[44px] flex items-center justify-center transition-[0.25s] ease cursor-pointer bg-[#2d5a27] border-2 border-[#2d5a27] text-white no-underline hover:bg-[#1a8f3a]" onClick={closeMobileMenu}>
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
