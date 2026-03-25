import React, { useState, useEffect } from "react";

const Hero = () => {
	const [activeIcon, setActiveIcon] = useState(0);
	const [particles, setParticles] = useState([]);

	const sidebarIcons = [
		{ icon: "📊", label: "Analytics" },
		{ icon: "👥", label: "Clients" },
		{ icon: "📝", label: "Plans" },
		{ icon: "⚡", label: "Energy" },
		{ icon: "🍎", label: "Nutrition" },
	];

	const stats = [
		{ value: "89%", label: "Progress", icon: "📈" },
		{ value: "24", label: "Goals", icon: "✅" },
		{ value: "95%", label: "Health", icon: "💪" },
	];

	// Generate particles
	useEffect(() => {
		const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			delay: Math.random() * 8,
			duration: 6 + Math.random() * 4,
		}));
		setParticles(generatedParticles);
	}, []);

	return (
		<section className="bg-[linear-gradient(135deg,#f8fdf8_0%,#e8f5e8_50%,#d4edda_100%)] pt-[120px] pb-[80px] mt-[80px] max-[768px]:pt-[100px] max-[768px]:pb-[60px] max-[768px]:mt-0 relative overflow-hidden min-h-[100vh] max-[768px]:min-h-0 flex items-center">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute rounded-full opacity-10 animate-float w-[300px] h-[300px] top-[10%] left-[5%] bg-[radial-gradient(circle,theme(colors.primary-green)_0%,transparent_70%)] [animation-delay:0s]"></div>
				<div className="absolute rounded-full opacity-10 animate-float w-[200px] h-[200px] top-[60%] right-[10%] bg-[radial-gradient(circle,#4a90e2_0%,transparent_70%)] [animation-delay:2s]"></div>
				<div className="absolute rounded-full opacity-10 animate-float w-[150px] h-[150px] bottom-[20%] left-[20%] bg-[radial-gradient(circle,#67b26f_0%,transparent_70%)] [animation-delay:4s]"></div>
			</div>

			{/* Particle Effects */}
			<div className="absolute inset-0 pointer-events-none z-[1]">
				{particles.map((particle) => (
					<div
						key={particle.id}
						className="absolute w-[4px] h-[4px] bg-[#2d5a27] rounded-full opacity-30 animate-particleFloat"
						style={{
							left: `${particle.left}%`,
							animationDelay: `${particle.delay}s`,
							animationDuration: `${particle.duration}s`,
						}}
					></div>
				))}
			</div>

			<div className="max-w-[1200px] mx-auto w-full px-4">
				<div className="grid grid-cols-2 max-[968px]:grid-cols-1 gap-[80px] max-[1200px]:gap-[60px] max-[968px]:gap-[50px] max-[968px]:text-center items-center relative z-[2]">
					<div className="relative">
						<h1 className="text-[3.5rem] max-[1200px]:text-[3rem] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem] leading-[1.1] mb-[24px] font-bold animate-[slideInLeft_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_both] bg-[linear-gradient(135deg,#2d5a27,#4a7c59)] bg-clip-text text-transparent">
							Streamline Your Practice. Elevate Client Care with Ayurvedic
							Intelligence.
						</h1>
						<p className="text-[1.4rem] max-[768px]:text-[1.2rem] max-[480px]:text-[1rem] text-[#666] mb-[48px] leading-[1.6] animate-[slideInLeft_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_0.2s_both] relative pl-[24px] max-[968px]:pl-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[4px] before:bg-[linear-gradient(to_bottom,#2d5a27,#67b26f)] before:rounded-[2px] max-[968px]:before:hidden">
							The all-in-one cloud platform for Ayurvedic dietitians to manage
							their practice, create personalized diet plans, and perform deep
							Ayurvedic & nutrient analysis—all in one place.
						</p>
						<div className="flex gap-[20px] flex-wrap animate-[slideInLeft_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_0.4s_both] max-[968px]:justify-center">
							<a href="#trial" className="px-[32px] py-[16px] max-[480px]:px-[28px] max-[480px]:py-[14px] rounded-[50px] no-underline font-semibold text-[1.1rem] max-[480px]:text-[1rem] transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative overflow-hidden flex items-center gap-[10px] border-none cursor-pointer group bg-[linear-gradient(135deg,#2d5a27,#4a7c59)] text-white shadow-[0_8px_25px_rgba(45,90,39,0.3)] hover:-translate-y-[3px] hover:scale-105 hover:shadow-[0_15px_35px_rgba(45,90,39,0.4)]">
								<span className="absolute inset-0 -left-full w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] transition-[left] duration-500 ease-out group-hover:left-full"></span>
								<span>🎯</span>
								Start Your 14-Day Free Trial
							</a>
							<a href="#demo" className="px-[32px] py-[16px] max-[480px]:px-[28px] max-[480px]:py-[14px] rounded-[50px] no-underline font-semibold text-[1.1rem] max-[480px]:text-[1rem] transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative overflow-hidden flex items-center gap-[10px] cursor-pointer group bg-white/90 !h-[6vh] text-[#2d5a27] border-2 border-[#2d5a27] backdrop-blur-[10px] hover:bg-[#2d5a27] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(45,90,39,0.3)]">
								<span className="absolute inset-0 -left-full w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] transition-[left] duration-500 ease-out group-hover:left-full"></span>
								<span>🎥</span>
								Watch a Demo Video
							</a>
						</div>
					</div>
					<div className="relative animate-[slideInRight_0.8s_cubic-bezier(0.25,0.46,0.45,0.94)_0.6s_both]">
						<div className="bg-white/95 backdrop-blur-[40px] rounded-[24px] shadow-[0_35px_70px_rgba(0,0,0,0.15),0_25px_50px_rgba(45,90,39,0.12),inset_0_1px_0_rgba(255,255,255,0.8),0_0_0_1px_rgba(255,255,255,0.3)] overflow-hidden [transform:perspective(1200px)_rotateY(-8deg)_rotateX(5deg)] max-[968px]:transform-none transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] border border-white/80 relative hover:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(2deg)_translateY(-15px)_scale(1.02)] max-[968px]:hover:transform-none max-[968px]:hover:-translate-y-[10px] max-[968px]:hover:scale-[1.02] max-[968px]:max-w-[600px] max-[968px]:mx-auto before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(45,90,39,0.03)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(74,144,226,0.05)_0%,transparent_50%)] before:pointer-events-none before:z-[1]">
							<div className="bg-[linear-gradient(135deg,#2d5a27,#3a7a4e,#4a7c59)] px-[30px] py-[20px] flex justify-between items-center relative overflow-hidden z-[2] after:absolute after:top-0 after:left-0 after:right-0 after:h-[1px] after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]">
								<div className="flex gap-[12px]">
									<span className="w-[16px] h-[16px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer relative overflow-hidden hover:scale-125 hover:brightness-110 group bg-[linear-gradient(135deg,#ff5f57,#ff3b30)]" title="Close"><span className="absolute left-[-100%] top-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] transition-[left] duration-300 group-hover:left-[100%]"></span></span>
									<span className="w-[16px] h-[16px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer relative overflow-hidden hover:scale-125 hover:brightness-110 group bg-[linear-gradient(135deg,#ffbd2e,#ffa500)]" title="Minimize"><span className="absolute left-[-100%] top-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] transition-[left] duration-300 group-hover:left-[100%]"></span></span>
									<span className="w-[16px] h-[16px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer relative overflow-hidden hover:scale-125 hover:brightness-110 group bg-[linear-gradient(135deg,#28ca42,#20b038)]" title="Maximize"><span className="absolute left-[-100%] top-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] transition-[left] duration-300 group-hover:left-[100%]"></span></span>
								</div>
							</div>
							<div className="flex h-[340px] max-[768px]:h-[300px] max-[480px]:h-[250px] bg-[linear-gradient(135deg,#f8fdf8_0%,#ffffff_100%)] relative z-[2]">
								<div className="w-[90px] bg-[linear-gradient(180deg,#f5f2e9_0%,#e8e4d9_100%)] px-[15px] py-[25px] flex flex-col gap-[16px] border-r border-[#2d5a271a] relative">
									{sidebarIcons.map((item, index) => (
										<div
											key={index}
											className={`w-[50px] h-[50px] rounded-[12px] flex items-center justify-center text-[1.3rem] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer border-2 relative overflow-hidden group ${
												activeIcon === index 
													? "bg-[linear-gradient(135deg,#2d5a27,#4a7c59)] text-white shadow-[0_8px_20px_rgba(45,90,39,0.4)] -translate-y-[2px] border-transparent after:absolute after:-right-[3px] after:top-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[20px] after:bg-[#2d5a27] after:rounded-[2px]" 
													: "bg-white/90 text-[initial] border-transparent hover:bg-[#2d5a27] hover:text-white hover:-translate-y-[5px] hover:scale-110 hover:shadow-[0_10px_25px_rgba(45,90,39,0.3)] hover:border-white/30"
											}`}
											onClick={() => setActiveIcon(index)}
											onMouseEnter={() => setActiveIcon(index)}
											title={item.label}
										>
											<span className="absolute inset-0 -left-full w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] transition-left duration-500 ease-out group-hover:left-full z-10 pointer-events-none"></span>
											{item.icon}
										</div>
									))}
								</div>
								<div className="flex-1 p-[30px] flex flex-col gap-[25px]">
									<div className="flex-1 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(248,253,248,0.9))] rounded-[16px] border border-[#2d5a271a] relative overflow-hidden backdrop-blur-[10px]">
										<div className="absolute top-[20px] left-[20px] right-[20px] bottom-[20px] flex flex-col">
											<div className="flex justify-between items-center mb-[20px]">
												<div className="font-semibold text-[#2d5a27] text-[0.9rem]">Wellness Progress</div>
												<div className="text-[0.8rem] text-[#666]">Last 7 Days</div>
											</div>
											<div className="flex-1 flex items-end gap-[8%] px-[5%]">
												<div className="flex-1 bg-[linear-gradient(to_top,#2d5a27,#67b26f,#8bc34a)] rounded-t-[6px] origin-bottom relative min-h-[20px] animate-growBar after:content-[attr(data-value)] after:absolute after:top-[-25px] after:left-1/2 after:-translate-x-1/2 after:text-[0.7rem] after:font-semibold after:text-[#2d5a27] after:opacity-0 after:animate-fadeInOut" data-value="40%" style={{ height: "40%", animationDelay: "0s" }}></div>
												<div className="flex-1 bg-[linear-gradient(to_top,#2d5a27,#67b26f,#8bc34a)] rounded-t-[6px] origin-bottom relative min-h-[20px] animate-growBar after:content-[attr(data-value)] after:absolute after:top-[-25px] after:left-1/2 after:-translate-x-1/2 after:text-[0.7rem] after:font-semibold after:text-[#2d5a27] after:opacity-0 after:animate-fadeInOut" data-value="70%" style={{ height: "70%", animationDelay: "0.3s" }}></div>
												<div className="flex-1 bg-[linear-gradient(to_top,#2d5a27,#67b26f,#8bc34a)] rounded-t-[6px] origin-bottom relative min-h-[20px] animate-growBar after:content-[attr(data-value)] after:absolute after:top-[-25px] after:left-1/2 after:-translate-x-1/2 after:text-[0.7rem] after:font-semibold after:text-[#2d5a27] after:opacity-0 after:animate-fadeInOut" data-value="50%" style={{ height: "50%", animationDelay: "0.6s" }}></div>
												<div className="flex-1 bg-[linear-gradient(to_top,#2d5a27,#67b26f,#8bc34a)] rounded-t-[6px] origin-bottom relative min-h-[20px] animate-growBar after:content-[attr(data-value)] after:absolute after:top-[-25px] after:left-1/2 after:-translate-x-1/2 after:text-[0.7rem] after:font-semibold after:text-[#2d5a27] after:opacity-0 after:animate-fadeInOut" data-value="85%" style={{ height: "85%", animationDelay: "0.9s" }}></div>
												<div className="flex-1 bg-[linear-gradient(to_top,#2d5a27,#67b26f,#8bc34a)] rounded-t-[6px] origin-bottom relative min-h-[20px] animate-growBar after:content-[attr(data-value)] after:absolute after:top-[-25px] after:left-1/2 after:-translate-x-1/2 after:text-[0.7rem] after:font-semibold after:text-[#2d5a27] after:opacity-0 after:animate-fadeInOut" data-value="60%" style={{ height: "60%", animationDelay: "1.2s" }}></div>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 max-[480px]:grid-cols-1 gap-[15px] max-[768px]:gap-[12px] max-[480px]:gap-[10px]">
										{stats.map((stat, index) => (
											<div key={index} className="h-[70px] max-[768px]:h-[60px] bg-white/90 rounded-[12px] border border-[#2d5a271a] flex items-center px-[20px] max-[768px]:px-[15px] gap-[12px] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer relative overflow-hidden backdrop-blur-[10px] group hover:-translate-y-[5px] hover:scale-105 hover:shadow-[0_15px_30px_rgba(45,90,39,0.15)] hover:border-[#2d5a27]">
												<span className="absolute inset-0 -left-full w-full h-full bg-[linear-gradient(90deg,transparent,rgba(45,90,39,0.08),transparent)] transition-left duration-600 ease group-hover:left-full z-0 pointer-events-none"></span>
												<div className="w-[36px] h-[36px] bg-[linear-gradient(135deg,rgba(45,90,39,0.1),rgba(74,144,226,0.1))] rounded-[10px] flex items-center justify-center text-[1rem] text-[#2d5a27] transition-all duration-300 ease group-hover:bg-[linear-gradient(135deg,#2d5a27,#4a7c59)] group-hover:text-white group-hover:scale-110 group-hover:rotate-[5deg] relative z-10">{stat.icon}</div>
												<div className="flex-1 relative z-10">
													<div className="font-bold text-[#2d5a27] text-[1.2rem] leading-none mb-[4px]">{stat.value}</div>
													<div className="text-[0.75rem] text-[#666] uppercase tracking-[0.5px] font-medium">{stat.label}</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
