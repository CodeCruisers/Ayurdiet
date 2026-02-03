import { useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import "./Chatbot.css";

const ChatForm = ({ setChatHistory }) => {
	const inputeRef = useRef();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const message = inputeRef.current.value.trim();

		if (!message) return;
        inputeRef.current.value = "";
        
		setChatHistory(history => [...history, { sender: "user", text: message }]);
		
		setTimeout(() => {
			setChatHistory(history => [...history, { sender: "bot", text: "Thinking...." }]);
		}, 600);
	};

	return (
		<>
			<form action="#" className="chat-form" onSubmit={handleFormSubmit}>
				<input
					ref={inputeRef}
					type="text"
					placeholder="Message"
					className="message-input"
					required
				/>
				<button className="send-btn">
					<BiSolidSend />
				</button>
			</form>
		</>
	);
};
export default ChatForm;
