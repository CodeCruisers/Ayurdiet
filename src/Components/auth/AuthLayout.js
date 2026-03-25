import React, { useMemo } from "react";

const FEATURES = [
	"AI Dosha Analysis",
	"Smart Diet Plans",
	"Client Management",
	"Progress Tracking",
	"Billing Automation",
	"Daily Reminders",
	"Recipe Suggestions",
	"Nutrient Insights",
	"Scheduling",
	"Lifestyle Guidance",
];

const AuthLayout = ({ children, title, subtitle }) => {
	return (
		<div className="min-h-[100vh] w-full bg-[#f8faf8] flex items-center justify-center p-[24px]">
			{/* Glass Card with Brand + Page Title + Form */}
			<div className="w-full flex justify-center z-10 relative">
				<div className="w-full max-w-[420px] bg-white rounded-[20px] py-[32px] px-[28px] border border-[#e2e8f0] shadow-[0_20px_40px_rgba(0,0,0,0.08)] text-[#333] max-[480px]:py-[24px] max-[480px]:px-[20px]">
					<div className="text-center mb-[22px]">
						<div className="flex items-center justify-center gap-[10px] mb-[10px]">
							<div className="text-[2rem] leading-none">🌿</div>
							<div className="flex flex-col items-start leading-[1.1]">
								<h1 className="text-[1.4rem] font-bold text-[#2d5a27] m-0 p-0">AyurDiet</h1>
								<p className="text-[0.7rem] text-[#6b7280] m-0 p-0 tracking-wide uppercase font-semibold">Workspace</p>
							</div>
						</div>

						{(title || subtitle) && (
							<div className="mt-[20px]">
								{title && <h2 className="text-[1.2rem] font-bold text-[#1a1a1a]">{title}</h2>}
								{subtitle && <p className="text-[0.9rem] text-[#6b7280] mt-[4px]">{subtitle}</p>}
							</div>
						)}
					</div>
					{children}
				</div>
			</div>

			{/* Background soft blobs (Light mode tweaks) */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-[400px] h-[400px] bg-[#dff0e4] rounded-full blur-[80px] opacity-60 top-[-10%] left-[-5%] animate-[floatBG]" />
				<div className="absolute w-[300px] h-[300px] bg-[#fbf5dc] rounded-full blur-[80px] opacity-60 bottom-[-5%] right-[-5%] animate-[floatBG_12s_infinite]" />
			</div>
		</div>
	);
};

export default AuthLayout;
