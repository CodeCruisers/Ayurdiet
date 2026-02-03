import bot from "../../../../../Images/bot-avatar.jpg"
import user from "../../../../../Images/client.jpg"

const ChatMessages = ({ index, chat }) => {
	return (
		<div>
			<div
				key={index}
				className={`chat-message ${chat.sender === "user" ? "user-message" : "bot-message"}`}
			>
                <img src={`${chat.sender === "user" ? user : bot}`} alt="avatar" className="avatar" />
                <p className="message-text">{chat.text}</p>
			</div>
		</div>
	);
};
export default ChatMessages;
