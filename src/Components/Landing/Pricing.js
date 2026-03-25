import React from "react";

const Pricing = () => {
	const plans = [
		{
			name: "The Practitioner",
			price: "$29",
			period: "month",
			description: "For Solo Ayurvedic Dietitians",
			features: [
				"Client Management (50 clients)",
				"Basic Diet Planner",
				"Core Ayurvedic Analysis",
				"Appointment Scheduling",
				"Email Support",
			],
			cta: "Get Started",
			popular: false,
		},
		{
			name: "The Pro",
			price: "$59",
			period: "month",
			description: "Most Popular — For Growing Practices",
			features: [
				"Everything in Practitioner",
				"Advanced Nutrient Dashboard",
				"Client Portal",
				"Automated Follow-ups",
				"Branded Invoicing",
				"Priority Support",
			],
			cta: "Get Started",
			popular: true,
		},
		{
			name: "The Clinic",
			price: "Custom",
			period: "tailored",
			description: "For Multi-Practitioner Clinics & Institutions",
			features: [
				"Everything in Pro",
				"Multi-user logins",
				"Advanced Reporting",
				"Priority Support",
				"Custom Onboarding",
				"Dedicated Manager",
			],
			cta: "Contact Sales",
			popular: false,
		},
	];

	return (
		<section id="pricing-section" className="bg-[linear-gradient(180deg,#fdfdfd,#f3f4f6)] py-[100px] px-[20px] text-center">
			<div className="container">
				<h2 className="text-[2.2rem] text-[#005b38] mb-[10px] font-bold">Choose Your Plan. No Hidden Fees.</h2>
				<p className="text-[#6b7280] text-[1.1rem] mb-[60px]">
					Start with a 14-day free trial. No credit card required.
				</p>

				<div className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-[40px] justify-items-center">
					{plans.map((plan, index) => (
						<div
							key={index}
							className={`bg-[linear-gradient(145deg,rgba(255,255,255,0.6),rgba(240,240,240,0.2))] backdrop-blur-[12px] border rounded-[24px] py-[45px] px-[35px] text-center transition-all duration-[450ms] ease flex flex-col justify-between relative overflow-hidden min-h-[540px] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_60%)] before:z-0 ${plan.popular ? "border-[#d4af37] text-white scale-[1.07] bg-[linear-gradient(140deg,#005b38,#18b36e)] shadow-[0_20px_60px_rgba(24,179,110,0.4)] animate-[softPulse]" : "border-[rgba(192,192,192,0.4)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[10px] hover:scale-[1.02] hover:border-[#d4af37] hover:shadow-[0_15px_45px_rgba(0,0,0,0.15)]"}`}
						>
							{plan.popular && <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-[#d4af37] text-white py-[6px] px-[22px] rounded-[30px] text-[0.9rem] font-semibold shadow-[0_5px_10px_rgba(0,0,0,0.15)] z-[2]">Most Popular</div>}

							<div className="relative z-[1]">
								<h3 className={`text-[1.6rem] font-bold mb-[12px] ${plan.popular ? "text-white" : "text-[#005b38]"}`}>{plan.name}</h3>
								<div className="mb-[15px]">
									<span className={`text-[3.2rem] font-[800] ${plan.popular ? "text-white" : "text-[#d4af37]"}`}>{plan.price}</span>
									<span className={`text-[1rem] ${plan.popular ? "text-[rgba(255,255,255,0.9)]" : "text-[#6b7280]"}`}>/{plan.period}</span>
								</div>
								<p className={`mb-[30px] text-[1rem] ${plan.popular ? "text-[rgba(255,255,255,0.9)]" : "text-[#6b7280]"}`}>{plan.description}</p>
							</div>

							<ul className="list-none p-0 mx-0 mb-[35px] text-left grow relative z-[1]">
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex} className={`py-[12px] border-b font-medium transition-all duration-300 ease ${plan.popular ? "border-[rgba(255,255,255,0.2)] text-white" : "border-[rgba(192,192,192,0.4)] text-[#1a1a1a] hover:text-[#005b38] hover:translate-x-[3px]"}`}>{feature}</li>
								))}
							</ul>

							<a
								href="#trial"
								className={`w-full py-[14px] text-[1rem] rounded-[12px] transition-all duration-300 ease no-underline inline-block font-semibold tracking-[0.3px] relative z-[1] ${
									plan.popular ? "bg-[#d4af37] text-white hover:bg-[#b9932f] hover:shadow-[0_6px_18px_rgba(212,175,55,0.4)]" : "bg-[linear-gradient(135deg,#d6d6d6,#efefef)] text-[#005b38] border border-[#c0c0c0] shadow-[0_3px_8px_rgba(0,0,0,0.05)] hover:bg-[linear-gradient(135deg,#d4af37,#f1c75a)] hover:text-white hover:border-[#d4af37] hover:shadow-[0_5px_15px_rgba(212,175,55,0.4)]"
								}`}
							>
								{plan.cta}
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
