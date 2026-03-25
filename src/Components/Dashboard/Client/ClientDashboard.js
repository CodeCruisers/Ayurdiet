import { useState } from "react";
import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

const ClientDashboard = () => {
	const [activeView, setActiveView] = useState("dashboard");

	return (
		<div className="h-screen w-screen bg-[radial-gradient(circle_at_top,#1b1d22,#0a0b0f)] flex items-center justify-evenly font-['Inter',system-ui,sans-serif]">
			{/* Subtle noise overlay wrapper might be needed if they had an image, but it was empty in CSS */}
			<div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:pointer-events-none"></div>
			
			<Sidebar activeView={activeView} setActiveView={setActiveView} />
			<MainSection activeView={activeView} />
		</div>
	);
};

export default ClientDashboard;
