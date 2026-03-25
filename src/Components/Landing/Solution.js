import React, { useState, useEffect } from "react";

const Solution = () => {
	const [activeModule, setActiveModule] = useState(null);
	const [connections, setConnections] = useState([]);

	const modules = [
		{ id: "clients", icon: "👥", label: "Clients", posClasses: "[--node-position:translate(-160px,-160px)] max-[1200px]:[--node-position:translate(-130px,-130px)] max-[480px]:[--node-position:translate(-100px,-100px)]" },
		{ id: "diet", icon: "🍛", label: "Diet Plans", posClasses: "[--node-position:translate(160px,-160px)] max-[1200px]:[--node-position:translate(130px,-130px)] max-[480px]:[--node-position:translate(100px,-100px)]" },
		{ id: "analytics", icon: "📈", label: "Analytics", posClasses: "[--node-position:translate(160px,160px)] max-[1200px]:[--node-position:translate(130px,130px)] max-[480px]:[--node-position:translate(100px,100px)]" },
		{ id: "herbs", icon: "🌿", label: "Herb DB", posClasses: "[--node-position:translate(-160px,160px)] max-[1200px]:[--node-position:translate(-130px,130px)] max-[480px]:[--node-position:translate(-100px,100px)]" },
		{ id: "nutrients", icon: "🧪", label: "Nutrients", posClasses: "[--node-position:translate(0,-200px)] max-[1200px]:[--node-position:translate(0,-160px)] max-[480px]:[--node-position:translate(0,-120px)]" },
		{ id: "scheduling", icon: "📅", label: "Scheduling", posClasses: "[--node-position:translate(200px,0)] max-[1200px]:[--node-position:translate(160px,0)] max-[480px]:[--node-position:translate(120px,0)]" },
		{ id: "reports", icon: "📊", label: "Reports", posClasses: "[--node-position:translate(0,200px)] max-[1200px]:[--node-position:translate(0,160px)] max-[480px]:[--node-position:translate(0,120px)]" },
		{ id: "communication", icon: "💬", label: "Messages", posClasses: "[--node-position:translate(-200px,0)] max-[1200px]:[--node-position:translate(-160px,0)] max-[480px]:[--node-position:translate(-120px,0)]" },
	];

	useEffect(() => {
		const generateConnections = () => {
			const newConnections = [];
			modules.forEach((module, i) => {
				modules.forEach((otherModule, j) => {
					if (i < j) {
						newConnections.push({
							from: module.id,
							to: otherModule.id,
							id: `${module.id}-${otherModule.id}`,
						});
					}
				});
			});
			setConnections(newConnections);
		};

		generateConnections();
	}, []);

	useEffect(() => {
		if (!activeModule) return;

		const animateDataStream = () => {
			const activeModuleEl = document.querySelector(`.module-${activeModule}`);
			if (!activeModuleEl) return;

			modules.forEach((module) => {
				if (module.id !== activeModule) {
					createStream(`module-${activeModule}`, `module-${module.id}`);
				}
			});
		};

		const interval = setInterval(animateDataStream, 1000);
		return () => clearInterval(interval);
	}, [activeModule]);

	const createStream = (fromClass, toClass) => {
		const fromEl = document.querySelector(`.${fromClass}`);
		const toEl = document.querySelector(`.${toClass}`);
		const visualEl = document.querySelector(".integration-visual");

		if (!fromEl || !toEl || !visualEl) return;

		const fromRect = fromEl.getBoundingClientRect();
		const toRect = toEl.getBoundingClientRect();
		const visualRect = visualEl.getBoundingClientRect();

		const startX = fromRect.left + fromRect.width / 2 - visualRect.left;
		const startY = fromRect.top + fromRect.height / 2 - visualRect.top;
		const endX = toRect.left + toRect.width / 2 - visualRect.left;
		const endY = toRect.top + toRect.height / 2 - visualRect.top;

		const streamParticle = document.createElement("div");
		streamParticle.className = "absolute w-[6px] h-[6px] bg-[#2d5a27] rounded-full animate-[particleStream] shadow-[0_0_15px_rgba(45,90,39,0.7),0_0_30px_rgba(45,90,39,0.4)] pointer-events-none z-[3]";
		streamParticle.style.left = `${startX}px`;
		streamParticle.style.top = `${startY}px`;
		streamParticle.style.setProperty(
			"--stream-end",
			`translate(${endX - startX}px, ${endY - startY}px)`
		);

		visualEl.appendChild(streamParticle);

		setTimeout(() => {
			if (streamParticle.parentNode) {
				streamParticle.remove();
			}
		}, 2000);
	};

	const handleModuleInteraction = (moduleId) => {
		setActiveModule(activeModule === moduleId ? null : moduleId);
	};

	return (
		<section className="bg-[linear-gradient(135deg,#e8f5e8_0%,#c6d8c9_50%,#a8c5ab_100%)] py-[120px] max-[768px]:py-[80px] relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
				<div className="absolute rounded-full bg-[radial-gradient(circle,rgba(45,90,39,0.08)_0%,transparent_70%)] animate-[orbFloat] w-[150px] h-[150px] top-[10%] left-[5%] [animation-delay:0s]"></div>
				<div className="absolute rounded-full bg-[radial-gradient(circle,rgba(74,144,226,0.06)_0%,transparent_70%)] animate-[orbFloat] w-[100px] h-[100px] top-[70%] right-[10%] [animation-delay:2.5s]"></div>
				<div className="absolute rounded-full bg-[radial-gradient(circle,rgba(45,90,39,0.08)_0%,transparent_70%)] animate-[orbFloat] w-[80px] h-[80px] bottom-[15%] left-[15%] [animation-delay:5s]"></div>
			</div>

			<div className="container">
				<div className="grid grid-cols-2 max-[968px]:grid-cols-1 gap-[80px] max-[1200px]:gap-[60px] max-[968px]:gap-[50px] items-center max-w-[1200px] mx-auto relative z-[2] max-[968px]:text-center">
					<div className="p-[50px_40px] bg-[rgba(255,255,255,0.95)] backdrop-blur-[25px] rounded-[25px] text-center shadow-[0_25px_70px_rgba(0,0,0,0.12),0_10px_40px_rgba(45,90,39,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.7)] animate-[cardSlideIn] relative overflow-hidden group/text before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[linear-gradient(90deg,transparent,rgba(45,90,39,0.03),transparent)] before:transition-[left] before:duration-[0.6s] before:ease hover/text:before:left-[100%]">
						<h2 className="text-[3rem] max-[768px]:text-[2.4rem] font-[300] text-[#2d5a27] mb-[30px] leading-[1.1] animate-[titleReveal] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[linear-gradient(90deg,#2d5a27,#67b26f)] after:rounded-[2px] after:animate-[lineExpand]">
							<strong className="font-[700] bg-[linear-gradient(135deg,#2d5a27,#4a7c59,#67b26f)] bg-clip-text text-transparent relative">Everything Connected.</strong>
							<br />
							Perfectly Integrated.
						</h2>
						<p className="text-[1.15rem] text-[#5a6c5a] leading-[1.7] mb-[40px] font-[400] animate-[textReveal]">
							Every component of your practice works together seamlessly. Client
							data flows to diet plans, herb databases inform recommendations,
							and analytics drive better outcomes—all in one unified platform.
						</p>
						<a href="#trial" className="bg-[linear-gradient(135deg,#2d5a27,#4a7c59)] text-white border-none py-[16px] px-[42px] rounded-[30px] font-semibold text-[1.1rem] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] no-underline inline-flex items-center gap-[10px] cursor-pointer relative overflow-hidden shadow-[0_12px_35px_rgba(45,90,39,0.35),0_5px_20px_rgba(45,90,39,0.2)] animate-[buttonReveal] group/btn hover:-translate-y-[3px] hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(45,90,39,0.5),0_8px_30px_rgba(45,90,39,0.3),0_0_0_3px_rgba(255,255,255,0.2)]">
                            <span className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] transition-[left] duration-[0.6s] ease group-hover/btn:left-full"></span>
							Explore Integration
							<span className="text-[1.2rem] transition-all duration-[0.3s] ease group-hover/btn:translate-x-[6px] group-hover/btn:scale-[1.2]">⟶</span>
						</a>
					</div>
					<div>
						<div className="integration-visual relative h-[500px] max-[1200px]:h-[450px] max-[968px]:h-[400px] max-[768px]:h-[350px] max-[480px]:h-[300px] flex items-center justify-center animate-[visualAppear] max-[968px]:order-[-1]">
							{/* Central Hub */}
							<div
								className="absolute w-[120px] h-[120px] max-[768px]:w-[100px] max-[768px]:h-[100px] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,255,255,0.9))] backdrop-blur-[20px] border-2 border-transparent rounded-full flex items-center justify-center cursor-pointer transition-all duration-[0.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-[10] shadow-[0_20px_60px_rgba(45,90,39,0.15),inset_0_1px_0_rgba(255,255,255,0.9),0_0_0_1px_rgba(255,255,255,0.5)] animate-[hubPulse] hover:animate-[hubSpin] hover:scale-[1.05] group/hub"
								onMouseEnter={() => setActiveModule(null)}
								onClick={() => setActiveModule(null)}
							>
								<div className="text-[2.5rem] bg-[linear-gradient(135deg,#2d5a27,#4a7c59)] bg-clip-text text-transparent transition-all duration-[0.3s] ease animate-[iconBounce] group-hover/hub:animate-[iconSpin]">⚡</div>
							</div>

							{/* Connection System with Gradient */}
							<svg
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[2]"
								width="400"
								height="400"
								viewBox="0 0 400 400"
							>
								<defs>
									<linearGradient
										id="connectionGradient"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop offset="0%" stopColor="#2d5a27" stopOpacity="0.6" />
										<stop offset="50%" stopColor="#4a7c59" stopOpacity="0.8" />
										<stop offset="100%" stopColor="#67b26f" stopOpacity="0.6" />
									</linearGradient>
								</defs>
								{connections.map((conn) => (
									<line
										key={conn.id}
										className={`stroke-[url(#connectionGradient)] [stroke-dasharray:8] animate-[beamFlow] transition-all duration-[0.4s] ease ${activeModule === conn.from || activeModule === conn.to ? "stroke-[3px] opacity-100 drop-shadow-[0_0_10px_rgba(45,90,39,0.4)]" : "stroke-2 opacity-70"}`}
										x1={getModuleCoordinates(`module-${conn.from}`).x}
										y1={getModuleCoordinates(`module-${conn.from}`).y}
										x2={getModuleCoordinates(`module-${conn.to}`).x}
										y2={getModuleCoordinates(`module-${conn.to}`).y}
									/>
								))}
							</svg>

							{/* Module Nodes */}
							{modules.map((module, index) => (
								<div
									key={module.id}
									className={`module-${module.id} absolute w-[85px] h-[85px] max-[768px]:w-[70px] max-[768px]:h-[70px] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,255,255,0.85))] backdrop-blur-[15px] border-2 border-[rgba(232,245,232,0.8)] rounded-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-[0.4s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-[5] shadow-[0_12px_35px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] animate-[moduleEntrance] origin-center hover:border-[#2d5a27] hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,255,255,0.9))] hover:shadow-[0_20px_50px_rgba(45,90,39,0.2),inset_0_1px_0_rgba(255,255,255,0.9),0_0_0_3px_rgba(45,90,39,0.1)] hover:animate-[moduleHover] hover:[transform:var(--node-position)_scale(1.15)_rotate(5deg)] group/node ${module.posClasses} ${
										activeModule === module.id ? "animate-[activeModule]" : ""
									}`}
									style={{ animationDelay: `${(index + 1) * 0.1}s` }}
									onMouseEnter={() => handleModuleInteraction(module.id)}
									onClick={() => handleModuleInteraction(module.id)}
								>
									<div className="text-[1.8rem] max-[768px]:text-[1.5rem] mb-[6px] transition-all duration-[0.3s] ease grayscale-[0.3] group-hover/node:scale-[1.3] group-hover/node:-rotate-[5deg] group-hover/node:grayscale-0">{module.icon}</div>
									<div className="text-[0.7rem] font-[700] text-[#2d5a27] text-center leading-[1.2] tracking-[0.5px]">{module.label}</div>
								</div>
							))}

							{/* Interactive Status */}
							<div className={`absolute bottom-[25px] left-1/2 -translate-x-[120%] text-[0.9rem] text-[#2d5a27] bg-[rgba(255,255,255,0.92)] backdrop-blur-[15px] p-[12px_24px] rounded-[20px] transition-all duration-[0.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_12px_35px_rgba(0,0,0,0.2)] z-[15] border border-[rgba(255,255,255,0.6)] whitespace-nowrap pointer-events-none ${activeModule ? "opacity-100 translate-x-[-50%] translate-y-[-5px] animate-[statusSlideIn,statusBounce]" : "opacity-0"}`}>
								{activeModule
									? "Data streaming between modules..."
									: "Hover over any module to see connections"}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const getModuleCoordinates = (position) => {
	const coords = {
		"module-clients": { x: 100, y: 100 },
		"module-diet": { x: 300, y: 100 },
		"module-analytics": { x: 300, y: 300 },
		"module-herbs": { x: 100, y: 300 },
		"module-nutrients": { x: 200, y: 50 },
		"module-scheduling": { x: 350, y: 200 },
		"module-reports": { x: 200, y: 350 },
		"module-communication": { x: 50, y: 200 },
	};
	return coords[position] || { x: 200, y: 200 };
};

export default Solution;
