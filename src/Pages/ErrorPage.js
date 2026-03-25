import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="min-h-[100vh] w-full bg-[radial-gradient(circle_at_top,#0f1512,#040605)] flex justify-center items-center relative overflow-hidden p-[20px]">
			{/* Floating decorative shapes */}
			<div className="absolute rounded-full blur-[70px] opacity-25 animate-[floatBG] w-[300px] h-[300px] bg-[#2f7a66] top-[10%] left-[12%]"></div>
			<div className="absolute rounded-full blur-[70px] opacity-25 animate-[floatBG] w-[380px] h-[380px] bg-[#6b5638] bottom-[12%] right-[10%] [animation-delay:3s]"></div>
			<div className="absolute rounded-full blur-[70px] opacity-25 animate-[floatBG] w-[240px] h-[240px] bg-[#4b8b75] top-[55%] left-[70%] [animation-delay:2s]"></div>

			<div className="w-[clamp(280px,90vw,480px)] bg-[rgba(10,16,14,0.88)] backdrop-blur-[24px] rounded-[28px] py-[40px] px-[32px] text-center relative border border-[rgba(120,200,170,0.08)] shadow-[0_40px_80px_rgba(0,0,0,0.85)] animate-[fadeInCard]">
				<div className="flex justify-center gap-[clamp(10px,3vw,25px)] mb-[10px]">
					<span className="text-[clamp(4rem,10vw,7rem)] font-[800] text-[#a8d5ba] [text-shadow:0_0_8px_rgba(168,213,186,0.3),0_0_20px_rgba(80,200,160,0.15)] animate-[popDigit]">4</span>
					<span className="text-[clamp(4rem,10vw,7rem)] font-[800] text-[#c9b27d] [text-shadow:0_0_8px_rgba(201,178,125,0.3),0_0_20px_rgba(160,140,90,0.15)] animate-[popDigit] [animation-delay:0.2s]">0</span>
					<span className="text-[clamp(4rem,10vw,7rem)] font-[800] text-[#a8d5ba] [text-shadow:0_0_8px_rgba(168,213,186,0.3),0_0_20px_rgba(80,200,160,0.15)] animate-[popDigit]">4</span>
				</div>

				<h2 className="text-[clamp(1.4rem,4vw,2rem)] font-[600] text-[#e7efe9] mb-[10px]">Oops! Page Not Found</h2>

				<p className="text-[clamp(0.9rem,2.5vw,1rem)] text-[#9fb4a7] mb-[25px]">
					Looks like the page you're trying to reach doesn't exist or has been
					moved.
				</p>

				<Link to="/" className="inline-block py-[12px] px-[22px] bg-[linear-gradient(135deg,#3f8f77,#8c7a4e)] text-[#050807] no-underline rounded-[12px] text-[1rem] font-[600] transition-[0.3s] ease shadow-[0_10px_25px_rgba(63,143,119,0.35)] hover:-translate-y-[2px] hover:shadow-[0_15px_40px_rgba(140,122,78,0.5)]">
					Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
