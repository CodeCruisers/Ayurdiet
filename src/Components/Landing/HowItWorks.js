import React from "react";

const HowItWorks = () => {
	const steps = [
		{
			number: "1",
			title: "Onboard & Assess",
			description: "Add a client and input their unique Prakriti and Vikriti",
		},
		{
			number: "2",
			title: "Analyze & Plan",
			description:
				"Create a diet plan. Our software instantly provides Doshic and nutrient analysis",
		},
		{
			number: "3",
			title: "Achieve Results",
			description:
				"Share the plan via the client portal and monitor progress with integrated tools",
		},
	];

	return (
		<section id="how-it-works" className="section bg-white">
			<div className="container">
				<h2 className="section-title">
					Transform Your Practice in 3 Simple Steps
				</h2>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mb-[60px]">
					{steps.map((step, index) => (
						<div key={index} className="text-center py-10 px-5 relative">
							<div className="w-[60px] h-[60px] bg-[linear-gradient(135deg,#2d5a27,#4a7c59)] text-white rounded-full flex items-center justify-center text-[1.5rem] font-bold mx-auto mb-5">{step.number}</div>
							<h3 className="text-[1.4rem] mb-[15px] text-[#2d5a27]">{step.title}</h3>
							<p className="text-[#666] leading-[1.6]">{step.description}</p>
						</div>
					))}
				</div>
				<div className="text-center">
					<a href="#trial" className="btn btn-primary">
						Start Your Transformation Today
					</a>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
