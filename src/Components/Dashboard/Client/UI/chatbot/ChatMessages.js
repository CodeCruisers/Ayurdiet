import bot from "../../../../../Images/bot-avatar.jpg"
import user from "../../../../../Images/client.jpg"

const ChatMessages = ({ index, chat }) => {
	return (
		<div>
			<div
				key={index}
				className={`flex items-start gap-3 animate-[messageIn_0.3s_ease] ${chat.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
			>
                <img src={`${chat.sender === "user" ? user : bot}`} alt="avatar" className="w-[34px] h-[34px] rounded-full object-cover bg-white/5 shrink-0" />
                <p className={`max-w-[70%] p-[10px_14px] rounded-[14px] text-[0.88rem] leading-[1.5] m-0 ${chat.sender === "user" ? "bg-[#6ea96b]/25 text-[#91d19f]" : "bg-[#6ea96b]/15 text-[#e7efe9]"}`}>{chat.text}</p>
			</div>
		</div>
	);
};
export default ChatMessages;
