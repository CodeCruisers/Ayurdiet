import { useEffect, useRef, useState } from "react";
import "./Chat.css";
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
		<div className="chat-page">
			{/* Header */}
			<div className="chat-header">
				<div>
					<h2>Dietitian Chat</h2>
					<p>Dr. Emily Watson • Online</p>
				</div>
			</div>

			{/* Messages */}
			<div className="chat-messages">
				{messages.map((msg) => (
					<div key={msg.id} className={`message ${msg.sender}`}>
						<div className="bubble">
							{msg.text}
							<span className="time">{msg.time}</span>
						</div>
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			{/* Input */}
			<div className="chat-input">
				<input
					type="text"
					placeholder="Message"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && sendMessage()}
				/>
				<button onClick={sendMessage}>➤</button>
			</div>
		</div>
	);
};

export default Chat;
