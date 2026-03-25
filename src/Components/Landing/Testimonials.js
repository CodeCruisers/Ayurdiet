import React from "react";

const Testimonials = () => {
	const testimonials = [
		{
			quote:
				"This platform is a game-changer. The ability to show clients a nutrient report for a traditionally Ayurvedic diet gives my recommendations so much more weight.",
			author: "Dr. Anika Mehta",
			title: "Certified Ayurvedic Dietitian",
			avatar: "👩‍⚕️",
		},
		{
			quote:
				"I've cut my admin time by 60%. The automated reminders and billing have simplified my life, letting me focus on taking on more clients.",
			author: "Mohd Asif Aswar",
			title: "Founder of 'Prakriti Clinic'",
			avatar: "👨‍💼",
		},
	];

	return (
		<section id="testimonials" className="section bg-cream">
			<div className="container">
				<h2 className="text-center text-[2.5rem] mb-[2vh] text-[#333]">
					Trusted by Ayurvedic Professionals Worldwide
				</h2>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-[40px] mt-[6vh]">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-white p-[40px] rounded-[15px] shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
							<div className="mb-[30px]">
								<p className="text-[1.1rem] leading-[1.7] text-[#333] italic">"{testimonial.quote}"</p>
							</div>
							<div className="flex items-center gap-[15px]">
								<div className="text-[2.5rem]">{testimonial.avatar}</div>
								<div>
									<h4 className="text-[#2d5a27] m-0 mb-[5px]">{testimonial.author}</h4>
									<span className="text-[#666] text-[0.9rem]">{testimonial.title}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
