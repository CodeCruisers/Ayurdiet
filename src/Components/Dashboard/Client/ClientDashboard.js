import { useState } from "react";
import "./ClientDashboard.css";
import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

const ClientDashboard = () => {
	const [activeView, setActiveView] = useState("dashboard");

	return (
		<div id="clientDashboard">
			<Sidebar activeView={activeView} setActiveView={setActiveView} />
			<MainSection activeView={activeView} />
		</div>
	);
};

export default ClientDashboard;
