import React from "react";

const Footer = () => {
	return (
		<footer className="bg-dark-brown text-white pt-[60px] pb-[30px]">
			<div className="container">
				<div className="grid gap-[40px] mb-[40px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr]">
					<div>
						<div className="flex justify-start mb-[15px]">
							<span className="logo-icon">🌿</span>
							<span className="text-white">AyurDiet</span>
						</div>
						<p>
							Empowering Ayurvedic professionals with intelligent technology for
							better client care and practice growth.
						</p>
					</div>

					<div>
						<h4 className="text-gold mb-[20px] text-[1.1rem]">Product</h4>
						<ul className="list-none p-0 m-0">
							<li className="mb-[10px]">
								<a href="#features" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Features</a>
							</li>
							<li className="mb-[10px]">
								<a href="#pricing" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Pricing</a>
							</li>
							<li className="mb-[10px]">
								<a href="#testimonials" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Testimonials</a>
							</li>
							<li className="mb-[10px]">
								<a href="#demo" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Demo</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-gold mb-[20px] text-[1.1rem]">Company</h4>
						<ul className="list-none p-0 m-0">
							<li className="mb-[10px]">
								<a href="#about" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">About Us</a>
							</li>
							<li className="mb-[10px]">
								<a href="#blog" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Blog</a>
							</li>
							<li className="mb-[10px]">
								<a href="#contact" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Contact</a>
							</li>
							<li className="mb-[10px]">
								<a href="#careers" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Careers</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-gold mb-[20px] text-[1.1rem]">Legal</h4>
						<ul className="list-none p-0 m-0">
							<li className="mb-[10px]">
								<a href="#privacy" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Privacy Policy</a>
							</li>
							<li className="mb-[10px]">
								<a href="#terms" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Terms of Service</a>
							</li>
							<li className="mb-[10px]">
								<a href="#security" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Data Security</a>
							</li>
							<li className="mb-[10px]">
								<a href="#compliance" className="text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Compliance</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-gold mb-[20px] text-[1.1rem]">Contact</h4>
						<p>Email: ayurdietauth@outlook.com</p>
						<p>Phone: +91 7905306261</p>
						<div className="flex gap-[15px] mt-[15px]">
							<a href="#linkedin" className="px-[15px] py-[8px] bg-[rgba(255,255,255,0.1)] rounded-[5px] text-[0.9rem] text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">LinkedIn</a>
							<a href="#instagram" className="px-[15px] py-[8px] bg-[rgba(255,255,255,0.1)] rounded-[5px] text-[0.9rem] text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">Instagram</a>
							<a href="#youtube" className="px-[15px] py-[8px] bg-[rgba(255,255,255,0.1)] rounded-[5px] text-[0.9rem] text-cream no-underline transition-colors duration-[0.3s] ease hover:text-gold">YouTube</a>
						</div>
					</div>
				</div>

				<div className="border-t border-[rgba(255,255,255,0.1)] pt-[30px] text-center text-[rgba(255,255,255,0.7)]">
					<p>
						&copy; 2024 AyurDiet. All rights reserved. Bringing ancient wisdom
						to modern practice.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
