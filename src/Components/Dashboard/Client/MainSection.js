import React from "react";
import Dashboard from "./UI/Dashboard";
import Appointments from "./UI/appointments/Appointments";
import Contact from "./UI/Contact";
import "./MainSection.css";
import CallUs from "./UI/CallUs";
import Chatbot from "./UI/chatbot/Chatbot";
import Chat from "./UI/chat/Chat";
import Cookbook from "./UI/cookbook/Cookbook";

const MainSection = ({ activeView }) => {
	return (
		<div id="mainSection">
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
