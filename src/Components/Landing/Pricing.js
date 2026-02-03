import React from "react";
import "./Pricing.css";

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
		<section id="pricing-section">
			<div className="container">
				<h2 className="section-title">Choose Your Plan. No Hidden Fees.</h2>
				<p className="section-subtitle">
					Start with a 14-day free trial. No credit card required.
				</p>

				<div id="pricing-grid">
					{plans.map((plan, index) => (
						<div
							id="pricing-card"
							key={index}
							className={plan.popular ? "popular" : ""}
						>
							{plan.popular && <div id="popular-badge">Most Popular</div>}

							<div id="plan-header">
								<h3>{plan.name}</h3>
								<div id="plan-price">
									<span className="price">{plan.price}</span>
									<span className="period">/{plan.period}</span>
								</div>
								<p id="plan-description">{plan.description}</p>
							</div>

							<ul id="plan-features">
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex}>{feature}</li>
								))}
							</ul>

							<a
								href="#trial"
								id="plan-cta"
								className={`btn ${
									plan.popular ? "btn-primary" : "btn-secondary"
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
