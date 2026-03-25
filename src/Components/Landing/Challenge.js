import React from "react";
import heroBg from "../../Images/background.jpg";

const Challenge = () => {
	const painPoints = [
		{
			icon: "📊",
			title: "Manual Dosha Analysis",
			description:
				"Spending hours cross-referencing texts to analyze the Virya, Vipaka, and Guna of a single meal plan?",
		},
		{
			icon: "📅",
			title: "Administrative Overload",
			description:
				"Drowning in appointment scheduling, client notes, and follow-ups across multiple notebooks and apps?",
		},
		{
			icon: "🔬",
			title: "The Data Gap",
			description:
				"Struggling to bridge the gap between timeless Ayurvedic wisdom and modern nutritional science?",
		},
		{
			icon: "⏱",
			title: "Time Drain",
			description:
				"Wishing you could spend less time on paperwork and more time guiding your clients to health?",
		},
		{
			icon: "💬",
			title: "Client Communication Chaos",
			description:
				"Managing endless messages, emails, and calls across different platforms, making it hard to track client conversations and follow-ups?",
		},
		{
			icon: "💰",
			title: "Inefficient Billing & Payments",
			description:
				"Spending hours on manual invoicing, payment tracking, and chasing late payments instead of focusing on client care?",
		},
	];

	return (
		<section className="section bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${heroBg})` }}>
			<div className="container">
				<h2 className="section-title text-center text-[2rem] mb-10 font-[800] text-[#084d1d] [text-shadow:1px_1px_2px_rgba(167,167,167,0.726)]">
					Are You Juggling Too Much in Your Practice?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{painPoints.map((point, index) => (
						<div key={index} className="text-center py-10 px-[30px] bg-[#ffffff88] rounded-[15px] border border-[#e6e6e6] transition-transform duration-300 ease backdrop-blur-[8px] hover:-translate-y-[5px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.562)]">
							<div className="text-[3rem] mb-5">{point.icon}</div>
							<h3 className="text-[1.3rem] mb-[15px] text-[#2d5a27]">{point.title}</h3>
							<p className="text-[#666] leading-[1.6]">{point.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Challenge;
