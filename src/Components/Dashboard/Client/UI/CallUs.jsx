import React from "react";

const CallUs = () => {
	return (
		<div className="w-full h-full py-[10px] px-10 text-gray-200 animate-[fadeIn_0.6s_ease] max-[900px]:p-6">
			<div className="mb-8 animate-[slideDown_0.6s_ease]">
				<h1 className="text-[2rem] mb-1.5">Call Us</h1>
				<p className="text-gray-400 max-w-[520px] leading-[1.6]">Prefer talking to a real human? We’re just a call away 🌿</p>
			</div>

			<div className="grid grid-cols-[1.1fr_1fr] max-[900px]:grid-cols-1 gap-7">
				{/* Main Call Card */}
				<div className="text-center bg-gradient-to-b from-[#111217] to-[#0b0c10] rounded-[18px] p-7 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-[floatUp_0.6s_ease]">
					<div className="text-[3rem] mb-3 animate-[pulse_2.5s_infinite_ease-in-out]">📞</div>
					<h3>Customer Support</h3>
					<p className="text-[1.4rem] font-semibold my-2.5 text-blue-400">+91 12345 67890</p>
					<p className="text-[0.9rem] text-gray-400 mb-5">Available Mon – Sat, 9:00 AM – 6:00 PM</p>

					<a href="tel:+911234567890" className="inline-block px-[26px] py-[12px] rounded-[14px] bg-gradient-to-br from-blue-600 to-blue-400 text-white no-underline font-semibold shadow-[0_1px_3px_rgba(37,99,235,0.45)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_3px_6px_rgba(37,99,235,0.6)]">
						Call Now
					</a>
				</div>

				{/* Alternative Options */}
				<div className="flex flex-col gap-4 bg-gradient-to-b from-[#111217] to-[#0b0c10] rounded-[18px] p-7 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-[floatUp_0.6s_ease]">
					<h3>Other Options</h3>

					<div className="flex items-center gap-[14px] bg-white/5 p-[14px] rounded-xl transition-all duration-[250ms] hover:translate-x-1 hover:bg-white/10">
						<span className="text-[1.4rem]">📧</span>
						<p>
							Email us at <strong>ayurdietauth@outlook.com</strong>
						</p>
					</div>

					<div className="flex items-center gap-[14px] bg-white/5 p-[14px] rounded-xl transition-all duration-[250ms] hover:translate-x-1 hover:bg-white/10">
						<span className="text-[1.4rem]">🤖</span>
						<p>Chat with our AI assistant for quick help</p>
					</div>

					<div className="flex items-center gap-[14px] bg-white/5 p-[14px] rounded-xl transition-all duration-[250ms] hover:translate-x-1 hover:bg-white/10">
						<span className="text-[1.4rem]">🕒</span>
						<p>Request a callback at your convenience</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallUs;
