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
		<div className="min-h-[100vh] w-full bg-[radial-gradient(circle_at_top,#0f1512,#050807)] flex items-center justify-center p-[24px]">
			{/* Glass Card with Brand + Page Title + Form */}
			<div className="w-full flex justify-center">
				<div className="w-full max-w-[420px] bg-[rgba(20,28,25,0.85)] rounded-[20px] py-[32px] px-[28px] border border-[rgba(160,200,170,0.1)] shadow-[0_30px_60px_rgba(0,0,0,0.9)] backdrop-blur-[18px] text-[#e7efe9] max-[480px]:py-[24px] max-[480px]:px-[20px]">
					<div className="text-center mb-[22px]">
						<div className="auth-brand">
							<div className="auth-brand-mark">🌿</div>
							<div className="auth-brand-text">
								<h1 className="text-[1.4rem] text-[#e7efe9]">AyurDiet</h1>
								<p className="text-[0.85rem] text-[#9fb4a7]">Ayurveda-first practice & nutrition management</p>
							</div>
						</div>

						{(title || subtitle) && (
							<div className="auth-page-title">
								{title && <h2 className="text-[1.2rem] mt-[16px] text-[#6ea96b]">{title}</h2>}
								{subtitle && <p className="text-[0.9rem] text-[#9fb4a7]">{subtitle}</p>}
							</div>
						)}
					</div>
					{children}
				</div>
			</div>

			{/* Background soft blobs */}
			<div className="background-canvas">
				<div className="floating-element el-1" />
				<div className="floating-element el-2" />
				<div className="floating-element el-3" />
				<div className="floating-element el-4" />
			</div>
		</div>
	);
};

export default AuthLayout;
