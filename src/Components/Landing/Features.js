import React from "react";

const Features = () => {
	const features = [
		{
			icon: "👥",
			title: "Intelligent Client Management",
			description:
				"Store Dosha assessments, medical history, progress notes, and goals in one secure, centralized location.",
		},
		{
			icon: "🍛",
			title: "Ayurvedic Diet Planner",
			description:
				"Easily build personalized meal plans. Our intelligent database auto-analyzes the Rasa, Guna, Virya, and Vipaka.",
		},
		{
			icon: "📈",
			title: "Advanced Nutrient Analysis",
			description:
				"Get a full breakdown of macronutrients and micronutrients alongside the Ayurvedic properties of any diet plan.",
		},
		{
			icon: "⚙️",
			title: "Seamless Scheduling & Billing",
			description:
				"Automate appointment bookings, send reminders, and create professional invoices without leaving the platform.",
		},
		{
			icon: "📱",
			title: "Enhanced Client Experience",
			description:
				"Give clients their own portal to access plans, log food, and track their journey, improving adherence and outcomes.",
		},
		{
			icon: "🌿",
			title: "Powered by Ayurvedic Pharmacopoeia",
			description:
				"Our core engine is built on a validated database of ingredients and their effects, ensuring authentic analysis.",
		},
	];

	return (
		<section id="features" className="section bg-cream relative py-[80px] before:absolute before:content-[''] before:top-[-50px] before:left-0 before:right-0 before:h-[50px] before:bg-[linear-gradient(to_bottom,transparent,theme(colors.cream)_70%)] before:pointer-events-none after:absolute after:content-[''] after:bottom-[-50px] after:left-0 after:right-0 after:h-[50px] after:bg-[linear-gradient(to_top,transparent,theme(colors.cream)_70%)] after:pointer-events-none">
			<div className="container relative z-[2]">
				<h2 className="section-title">
					Everything You Need, Perfectly Integrated
				</h2>
				<p className="section-subtitle">
					Comprehensive tools designed specifically for the modern Ayurvedic
					professional
				</p>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[40px] relative z-[1]">
					{features.map((feature, index) => (
						<div key={index} className="bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.15)_100%)] bg-center bg-no-repeat bg-cover border border-white/40 px-[30px] py-[40px] rounded-[20px] text-center shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.05)] transition-all duration-[400ms] ease relative overflow-hidden z-[1] hover:-translate-y-[8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.3)] group/card before:absolute before:inset-0 before:shadow-[0_0_20px_rgb(0,0,0)] before:bg-center before:bg-no-repeat before:bg-cover before:blur-[4px] before:-z-[1] before:rounded-[20px] before:opacity-70 group-hover/card:before:blur-[8px] group-hover/card:before:opacity-80 after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.1)_100%)] after:-z-[1] after:rounded-[20px] group-hover/card:after:bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.2)_100%)]">
							{/* Simple water droplets */}
							<div className="absolute bg-white rounded-full opacity-0 animate-[dropletAppear_0.3s_ease_forwards] z-[1] group-hover/card:animate-[dropletPulse_2s_ease-in-out_infinite] w-[6px] h-[6px] top-[20px] right-[30px] [animation-delay:0.1s]"></div>
							<div className="absolute bg-white rounded-full opacity-0 animate-[dropletAppear_0.3s_ease_forwards] z-[1] group-hover/card:animate-[dropletPulse_2s_ease-in-out_infinite] w-[4px] h-[4px] top-[15px] left-[25px] [animation-delay:0.2s]"></div>
							<div className="absolute bg-white rounded-full opacity-0 animate-[dropletAppear_0.3s_ease_forwards] z-[1] group-hover/card:animate-[dropletPulse_2s_ease-in-out_infinite] w-[5px] h-[5px] bottom-[25px] right-[20px] [animation-delay:0.3s]"></div>
							<div className="absolute bg-white rounded-full opacity-0 animate-[dropletAppear_0.3s_ease_forwards] z-[1] group-hover/card:animate-[dropletPulse_2s_ease-in-out_infinite] w-[3px] h-[3px] bottom-[30px] left-[35px] [animation-delay:0.4s]"></div>

							<div className="text-[3.5rem] mb-[20px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)] relative z-[2]">{feature.icon}</div>
							<h3 className="text-[1.4rem] mb-[15px] text-[#2d5a27] relative z-[2]">{feature.title}</h3>
							<p className="text-[#666] leading-[1.6] relative z-[2]">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
