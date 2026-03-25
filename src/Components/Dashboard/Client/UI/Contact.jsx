import { useState } from "react";

const Contact = () => {
	const [showSuccess, setShowSuccess] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSuccess(true);
	};

	const closeSuccess = () => {
		setShowSuccess(false);
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className="w-full h-full py-[10px] px-10 text-gray-200 animate-[fadeIn_0.6s_ease] max-[900px]:p-6">
			<div className="mb-8 animate-[slideDown_0.7s_ease]">
				<h1 className="text-[2rem] mb-2 m-0">Contact Us</h1>
				<p className="text-gray-400 max-w-[520px] leading-[1.6] m-0">We’re here to help 🌿 Reach out anytime.</p>
			</div>

			<div className="grid grid-cols-[1.2fr_1fr] max-[900px]:grid-cols-1 gap-7">
				<div className="bg-gradient-to-b from-[#111217] to-[#0b0c10] rounded-[18px] p-[26px] border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-[floatUp_0.7s_ease]">
					<h3>Send a Message</h3>

					<form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
							className="bg-white/5 border border-white/10 rounded-[10px] py-3 px-[14px] text-gray-200 text-[0.9rem] transition-all duration-[250ms] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							required
							className="bg-white/5 border border-white/10 rounded-[10px] py-3 px-[14px] text-gray-200 text-[0.9rem] transition-all duration-[250ms] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
						/>
						<textarea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							required
							className="bg-white/5 border border-white/10 rounded-[10px] py-3 px-[14px] text-gray-200 text-[0.9rem] transition-all duration-[250ms] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 min-h-[140px] max-h-[200px] resize-none leading-[1.5] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar-thumb]:rounded-[10px]"
						/>
						<button type="submit" className="mt-2 p-3 rounded-xl border-none cursor-pointer font-semibold text-white bg-gradient-to-br from-blue-600 to-blue-400 shadow-[0_3px_5px_rgba(37,99,235,0.4)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_5px_10px_rgba(37,99,235,0.6)]">Send Message</button>
					</form>
				</div>

				<div className="flex flex-col gap-4 bg-gradient-to-b from-[#111217] to-[#0b0c10] rounded-[18px] p-[26px] border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] animate-[floatUp_0.7s_ease]">
					<h3>Other Ways</h3>
					<div className="flex items-center gap-[14px] bg-white/5 p-[14px] rounded-xl transition-all duration-[250ms] hover:translate-x-1 hover:bg-white/10 border-none text-[1.1rem]">📧 ayurdietauth@outlook.com</div>
					<div className="flex items-center gap-[14px] bg-white/5 p-[14px] rounded-xl transition-all duration-[250ms] hover:translate-x-1 hover:bg-white/10 border-none text-[1.1rem]">📞 +91 12345 67890</div>
					<div className="flex items-center gap-[14px] bg-white/5 p-[14px] rounded-xl transition-all duration-[250ms] hover:translate-x-1 hover:bg-white/10 border-none text-[1.1rem]">🤖 Chat with AI</div>
				</div>
			</div>

			{showSuccess && (
				<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] animate-[fadeIn_0.3s_ease]">
					<div className="bg-gradient-to-b from-[#111217] to-[#0b0c10] rounded-[18px] py-8 px-7 w-[340px] text-center border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] animate-[popUp_0.35s_ease] text-gray-200">
						<span className="text-[2.2rem] block mb-2.5">✅</span>
						<h3 className="mb-2 text-[1.2rem] m-0">Message sent successfully!</h3>
						<p className="text-gray-400 text-[0.95rem] mb-[18px] m-0">We’ll reach out to you ASAP.</p>
						<button className="bg-gradient-to-br from-blue-600 to-blue-400 border-none text-white py-2.5 px-[22px] rounded-[10px] font-semibold cursor-pointer shadow-[0_5px_10px_rgba(37,99,235,0.4)]" onClick={closeSuccess}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Contact;
