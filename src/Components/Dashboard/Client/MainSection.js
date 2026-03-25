import React from "react";
import Dashboard from "./UI/Dashboard";
import Appointments from "./UI/appointments/Appointments";
import Contact from "./UI/Contact";
import CallUs from "./UI/CallUs";
import Chatbot from "./UI/chatbot/Chatbot";
import Chat from "./UI/chat/Chat";
import Cookbook from "./UI/cookbook/Cookbook";

const MainSection = ({ activeView }) => {
	return (
		<div className="h-[90vh] w-[80vw] bg-gradient-to-b from-[#12141a] to-[#0c0d11] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.7)] p-[30px] overflow-y-auto text-gray-200 border border-white/5 font-['Exo_2',sans-serif] [&::-webkit-scrollbar]:w-2">
			{/* The .mainDisplay class in MainSection.css was actually not used here, maybe in the UI subcomponents. Let's provide a wrapper if needed or let the subcomponents use it. The #topbar and .mainDisplay classes from MainSection.css were likely meant for the subviews like Dashboard.js since they aren't used in MainSection itself. */}
			{(() => {
				switch (activeView) {
					case "dashboard":
						return <Dashboard />;
					case "appointments":
						return <Appointments />;
					case "chat":
						return <Chat />;
					case "cookbook":
						return <Cookbook />
					case "contact":
						return <Contact />;
					case "call":
						return <CallUs />;
					case "chatbot":
						return <Chatbot />;
					default:
						return <Dashboard />;
				}
			})()}
		</div>
	);
};

export default MainSection;
