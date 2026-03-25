import { useRef } from "react";
import { BiSolidSend } from "react-icons/bi";

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
			<form action="#" className="flex items-center gap-2.5 w-full animate-[formFadeUp_0.4s_ease]" onSubmit={handleFormSubmit}>
				<input
					ref={inputeRef}
					type="text"
					placeholder="Message"
					className="flex-1 bg-white/5 border border-white/10 rounded-[14px] p-[10px_14px] text-[0.9rem] text-[#e7efe9] outline-none transition-colors duration-[250ms] placeholder:text-[#9fb4a7] focus:border-[#6ea96b]/60 focus:bg-white/5"
					required
				/>
				<button className="flex items-center justify-center w-[42px] h-[42px] rounded-full border-none bg-[#6ea96b]/25 text-[#0b1411] text-[1.2rem] cursor-pointer transition-all duration-200 hover:bg-[#6ea96b]/35 hover:-translate-y-px active:scale-[0.92]">
					<BiSolidSend />
				</button>
			</form>
		</>
	);
};
export default ChatForm;
