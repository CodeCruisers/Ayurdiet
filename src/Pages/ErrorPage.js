import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="min-h-[100vh] w-full bg-[#f8faf8] flex justify-center items-center relative overflow-hidden p-[20px]">
			{/* Floating decorative shapes */}
			<div className="absolute rounded-full blur-[80px] opacity-60 animate-[floatBG] w-[400px] h-[400px] bg-[#dff0e4] top-[10%] left-[5%]"></div>
			<div className="absolute rounded-full blur-[80px] opacity-60 animate-[floatBG] w-[380px] h-[380px] bg-[#fbf5dc] bottom-[12%] right-[5%] [animation-delay:3s]"></div>

			<div className="w-[clamp(280px,90vw,480px)] bg-white rounded-[24px] py-[40px] px-[32px] text-center relative border border-[#e2e8f0] shadow-[0_20px_40px_rgba(0,0,0,0.05)] animate-[fadeInCard] z-10">
				<div className="flex justify-center gap-[clamp(10px,3vw,25px)] mb-[10px]">
					<span className="text-[clamp(4rem,10vw,7rem)] font-[800] text-[#6DBE45] drop-shadow-sm animate-[popDigit]">4</span>
					<span className="text-[clamp(4rem,10vw,7rem)] font-[800] text-[#eab308] drop-shadow-sm animate-[popDigit] [animation-delay:0.2s]">0</span>
					<span className="text-[clamp(4rem,10vw,7rem)] font-[800] text-[#6DBE45] drop-shadow-sm animate-[popDigit]">4</span>
				</div>

				<h2 className="text-[clamp(1.4rem,4vw,2rem)] font-[700] text-[#1a1a1a] mb-[10px]">Oops! Page Not Found</h2>

				<p className="text-[clamp(0.9rem,2.5vw,1rem)] text-[#6b7280] mb-[25px]">
					Looks like the page you're trying to reach doesn't exist or has been moved.
				</p>

				<Link to="/" className="inline-block py-[12px] px-[24px] bg-[#6DBE45] text-white no-underline rounded-[12px] text-[1rem] font-[600] transition-[0.3s] ease shadow-[0_4px_14px_rgba(109,190,69,0.4)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(109,190,69,0.6)]">
					Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
