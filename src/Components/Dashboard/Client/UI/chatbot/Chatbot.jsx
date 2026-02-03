import { useState } from "react";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";
import { RiRestartLine } from "react-icons/ri";

import bot from "../../../../../Images/bot-avatar.jpg";
import "./Chatbot.css";

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
		<div id="chatbot">
			{/* Header */}
			<div id="chatbot-header">
				<h2>Ayu</h2>
				<button
					className={`restart-btn ${isRestarting ? "restart-animate" : ""}`}
					onClick={handleRestart}
					title="Restart chat"
				>
					<RiRestartLine />
				</button>
			</div>

			{/* Body */}
			<div id="chatbot-body">
					<div className="chat-message bot-message">
						<img src={bot} alt="bot avatar" className="avatar" />
						<p className="message-text">
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
			<div id="chatbot-footer">
				<ChatForm setChatHistory={setChatHistory} />
			</div>
		</div>
	);
};

export default Chatbot;
