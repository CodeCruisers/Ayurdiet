import React from "react";

const StatsGrid = ({ stats, loading = false }) => {
	if (loading) {
		return (
			<div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 sm:gap-4 lg:gap-5 mb-[30px]">
				{[1, 2, 3, 4].map((item) => (
					<div key={item} className="bg-white/25 xl:h-[15vh] backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5 lg:p-6 shadow-[0_8px_32px_rgba(31,38,135,0.15)] pointer-events-none relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4 h-auto sm:h-[30vh] lg:h-[20vh] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(31,38,135,0.25),0_8px_16px_rgba(31,38,135,0.15)] hover:border-white/30 hover:bg-white/30 animate-card-entrance before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#4a90e2] before:to-[#67b26f] before:opacity-80 after:content-[''] after:absolute after:top-0 after:-left-[100%] after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:animate-shimmer focus-within:outline-2 focus-within:outline-white/50 focus-within:outline-offset-2">
						<div className="w-12 h-12 md:w-14 md:h-14 bg-white/30 rounded-[14px] flex items-center justify-center text-xl md:text-[1.5rem] shrink-0 border border-white/30 backdrop-blur-sm self-center sm:self-auto text-transparent">📊</div>
						<div className="flex-1 min-w-0">
							<div className="w-20 h-8 bg-white/30 rounded text-transparent">00</div>
							<div className="w-[120px] h-4 bg-white/30 rounded mt-1 mb-3 text-transparent">Loading</div>
							<div className="w-[60px] h-5 bg-white/30 border-none rounded text-transparent inline-flex items-center gap-1 px-2 py-1 text-sm font-semibold backdrop-blur-sm">+0%</div>
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 sm:gap-4 lg:gap-5 mb-[30px]">
			{stats.map((stat, index) => (
				<div
					key={index}
					className={`bg-white/25 xl:h-[15vh] backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5 lg:p-6 shadow-[0_8px_32px_rgba(31,38,135,0.15)] relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4 h-auto sm:h-[30vh] lg:h-[20vh] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(31,38,135,0.25),0_8px_16px_rgba(31,38,135,0.15)] hover:border-white/30 hover:bg-white/30 animate-card-entrance before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#4a90e2] before:to-[#67b26f] before:opacity-80 focus-within:outline-2 focus-within:outline-white/50 focus-within:outline-offset-2 ${stat.primary ? "bg-gradient-to-br from-[#4a90e2]/30 to-[#67b26f]/30 border-white/25 before:from-white before:to-[#e8f5e8] before:opacity-60" : ""}`}
					role="region"
					aria-label={`${stat.title} statistic`}
					style={{ animationDelay: `${(index + 1) * 0.1}s` }}
				>
					<div className={`w-12 h-12 md:w-14 md:h-14 bg-white/40 rounded-[14px] flex items-center justify-center text-xl md:text-[1.5rem] shrink-0 border border-white/30 backdrop-blur-sm self-center sm:self-auto ${stat.primary ? "bg-white/30 border-white/40 text-white" : ""}`} aria-hidden="true">
						{stat.icon}
					</div>
					<div className="flex-1 min-w-0">
						<h3 className={`text-2xl md:text-[2rem] font-bold text-[#2c3e50] m-0 mb-1 leading-[1.2] drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] ${stat.primary ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" : ""}`}>{stat.value}</h3>
						<p className={`text-sm md:text-[0.9rem] text-[#2c3e50]/80 m-0 mb-2 font-medium uppercase tracking-[0.5px] ${stat.primary ? "text-white/90" : ""}`}>{stat.title}</p>
						<div
							className={`inline-flex items-center gap-1 px-2 py-1 border rounded-lg text-sm font-semibold backdrop-blur-md ${
								stat.primary ? "bg-white/30 border-white/40 text-white" :
								(!stat.trend || stat.trend === "up") ? "text-[#28a745] bg-[#28a745]/20 border-[#28a745]/30" :
								stat.trend === "down" ? "text-[#dc3545] bg-[#dc3545]/20 border-[#dc3545]/30" :
								"text-[#6c757d] bg-[#6c757d]/20 border-[#6c757d]/30"
							}`}
							aria-label={`${stat.change} ${
								stat.trend === "down" ? "decrease" : "increase"
							}`}
						>
							<span className="text-base leading-none">
								{stat.trend === "down" ? "↘" : "↗"}
							</span>
							{stat.change}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default StatsGrid;
