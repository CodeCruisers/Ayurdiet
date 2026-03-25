import { useEffect, useRef, useState } from "react";
import { initialMessages } from "./messages";

const Chat = () => {
	const [messages, setMessages] = useState(initialMessages);
	const [input, setInput] = useState("");
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const sendMessage = () => {
		if (!input.trim()) return;

		const newMessage = {
			id: Date.now(),
			sender: "client",
			text: input,
			time: new Date().toLocaleTimeString("en-IN", {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		setMessages((prev) => [...prev, newMessage]);
		setInput("");
	};

	return (
		<div className="h-full flex flex-col bg-[radial-gradient(ellipse_at_top,#1a1d22_0%,#0b0d10_65%)] text-[#e6e6e6] rounded-[22px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
			{/* Header */}
			<div className="p-[18px_22px] border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
				<div>
					<h2 className="text-[1.1rem] font-semibold tracking-[0.2px] m-0">Dietitian Chat</h2>
					<p className="text-[0.8rem] text-[#9aa0a6] mt-[2px] m-0">Dr. Emily Watson • Online</p>
				</div>
			</div>

			{/* Messages */}
			<div className="flex-1 p-[26px] overflow-y-auto flex flex-col gap-[18px]">
				{messages.map((msg) => (
					<div key={msg.id} className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}>
						<div className={`max-w-[68%] p-[14px_18px] rounded-[18px] text-[0.95rem] leading-[1.5] backdrop-blur-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.4)] ${msg.sender === "client" ? "bg-gradient-to-br from-[#1f3d2b] to-[#162c22] text-[#e9f5ee] rounded-br-[6px]" : "bg-white/5 rounded-bl-[6px]"}`}>
							{msg.text}
							<span className="block mt-1.5 text-[0.65rem] text-[#9aa0a6] text-right">{msg.time}</span>
						</div>
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			{/* Input */}
			<div className="flex gap-3 p-4 border-t border-white/5 bg-gradient-to-t from-black/60 to-white/5">
				<input
					type="text"
					placeholder="Message"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && sendMessage()}
					className="flex-1 p-[12px_18px] rounded-full border-none bg-white/5 text-[#e6e6e6] text-[0.95rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] outline-none focus:bg-white/10 placeholder:text-[#8b9198]"
				/>
				<button onClick={sendMessage} className="flex items-center justify-center w-[46px] h-[46px] rounded-full border-none cursor-pointer bg-gradient-to-br from-[#2f6b4f] to-[#1f4f3a] text-[#e9f5ee] text-[1.1rem] shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-all hover:from-[#3a7d5c] hover:to-[#256348]">➤</button>
			</div>
		</div>
	);
};

export default Chat;
