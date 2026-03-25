import { useState } from "react";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";
import { RiRestartLine } from "react-icons/ri";

import bot from "../../../../../Images/bot-avatar.jpg";

const Chatbot = () => {
	const [chatHistory, setChatHistory] = useState([]);
	const [isRestarting, setIsRestarting] = useState(false);

	const handleRestart = () => {
		// trigger animation
		setIsRestarting(true);

		// clear chat after short delay (feels smoother)
		setTimeout(() => {
			setChatHistory([]);
			setIsRestarting(false);
		}, 600);
	};

	return (
		<div className="w-full max-w-[420px] h-full flex flex-col rounded-[14px] bg-transparent border border-white/5 overflow-hidden animate-[chatbotFade_0.5s_ease]">
			{/* Header */}
			<div className="h-[56px] px-[18px] flex items-center justify-between bg-[#ffffff05] border-b border-white/5">
				<h2 className="text-[1.05rem] font-semibold text-[#e7efe9] tracking-[0.3px] m-0">Ayu</h2>
				<button
					className={`bg-transparent border-none text-[#9fb4a7] text-[1.25rem] cursor-pointer transition-all duration-200 hover:text-[#6ea96b] flex items-center justify-center ${isRestarting ? "animate-[restartSpin_0.5s_cubic-bezier(0.4,0,0.2,1)]" : ""}`}
					onClick={handleRestart}
					title="Restart chat"
				>
					<RiRestartLine />
				</button>
			</div>

			{/* Body */}
			<div className="flex-1 p-[18px] flex flex-col gap-[14px] overflow-y-auto scroll-smooth">
					<div className="flex items-start gap-3 animate-[messageIn_0.3s_ease] flex-row">
						<img src={bot} alt="bot avatar" className="w-[34px] h-[34px] rounded-full object-cover bg-white/5 shrink-0" />
						<p className="max-w-[70%] p-[10px_14px] rounded-[14px] text-[0.88rem] leading-[1.5] text-[#e7efe9] bg-[#6ea96b]/15 m-0">
							Hello! I'm Ayu, your virtual diet assistant. How can I help you
							today?
						</p>
					</div>

				{/* Chat history */}
				{chatHistory.map((chat, index) => (
					<ChatMessages key={index} chat={chat} />
				))}
			</div>

			{/* Footer */}
			<div className="p-[14px] bg-[#ffffff05] border-t border-white/5">
				<ChatForm setChatHistory={setChatHistory} />
			</div>
		</div>
	);
};

export default Chatbot;
