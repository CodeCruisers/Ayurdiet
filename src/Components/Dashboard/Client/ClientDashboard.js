import { useState } from "react";
import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

const ClientDashboard = () => {
	const [activeView, setActiveView] = useState("dashboard");

	return (
		<div className="h-screen w-screen bg-[#f8faf8] flex items-stretch font-['Inter',system-ui,sans-serif] overflow-hidden">
			<Sidebar activeView={activeView} setActiveView={setActiveView} />
			<MainSection activeView={activeView} setActiveView={setActiveView} />
		</div>
	);
};

export default ClientDashboard;
