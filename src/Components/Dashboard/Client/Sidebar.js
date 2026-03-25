import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import SettingsModal from "./SettingsModal";

const Sidebar = ({ activeView, setActiveView }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const [showConfirm, setShowConfirm] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	const navItems = [
		{ id: "dashboard", label: "Dashboard", icon: "📊" },
		{ id: "diet-plan", label: "My Diet Plan", icon: "🥗" },
		{ id: "meal-log", label: "Meal Log", icon: "📝" },
		{ id: "nutrient-insights", label: "Nutrient Insights", icon: "🔬" },
		{ id: "health-progress", label: "Health Progress", icon: "📈" },
		{ id: "ayurvedic-profile", label: "Ayurvedic Profile", icon: "🌿" },
		{ id: "settings", label: "Settings", icon: "⚙️" },
	];

	return (
		<div className="w-[260px] h-full bg-white border-r border-[#e2e8f0] flex flex-col py-[24px] px-[20px] shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 shrink-0">
			{/* Brand Logo */}
			<div className="flex items-center gap-[12px] mb-[40px] px-[10px]">
				<span className="text-[2rem] leading-none">🌿</span>
				<div className="flex flex-col">
					<h2 className="text-[1.2rem] font-bold text-[#2d5a27] leading-tight m-0">AyurDiet</h2>
					<span className="text-[0.65rem] font-bold text-[#6b7280] uppercase tracking-wider">Health Tracker</span>
				</div>
			</div>

			{/* Navigation */}
			<div className="flex flex-col gap-[6px] flex-1 overflow-y-auto pr-[4px] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-[#cbd5e1] [&::-webkit-scrollbar-thumb]:rounded-full">
				<div className="text-[0.7rem] font-bold text-[#9ca3af] uppercase tracking-wider mb-[8px] pl-[10px]">Main Menu</div>
				{navItems.map((item) => (
					<button
						key={item.id}
						onClick={() => {
							if (item.id === "settings") setShowSettings(true);
							else setActiveView(item.id);
						}}
						className={`flex items-center gap-[12px] px-[14px] py-[12px] rounded-[12px] text-[0.95rem] font-semibold transition-all duration-[0.2s] cursor-pointer text-left border-none bg-transparent ${
							activeView === item.id && item.id !== "settings"
								? "bg-[#f0fdf4] text-[#166534] shadow-[0_2px_8px_rgba(22,101,52,0.06)]"
								: "text-[#4b5563] hover:bg-[#f8fafc] hover:text-[#111827]"
						}`}
					>
						<span className="text-[1.15rem] opacity-90 drop-shadow-sm">{item.icon}</span>
						{item.label}
					</button>
				))}
				
				<div className="w-full h-px bg-[#e2e8f0] my-[12px]"></div>
				
				{/* Logout */}
				<button
					onClick={() => setShowConfirm(true)}
					className="flex items-center gap-[12px] px-[14px] py-[12px] rounded-[12px] text-[0.95rem] font-semibold transition-all duration-[0.2s] cursor-pointer text-left border-none bg-transparent text-[#ef4444] hover:bg-[#fef2f2]"
				>
					<span className="text-[1.15rem] opacity-90 drop-shadow-sm">🚪</span>
					Logout
				</button>
			</div>

			{/* CTA Card */}
			<div className="mt-[20px] p-[20px] rounded-[16px] bg-[linear-gradient(135deg,#e0f2fe,#dcfce7)] border border-white shadow-[0_8px_20px_rgba(22,101,52,0.08)] relative overflow-hidden shrink-0">
				<div className="absolute top-[-20%] right-[-10%] text-[4.5rem] opacity-10 rotate-[15deg] pointer-events-none drop-shadow-md">🥗</div>
				<h4 className="text-[1rem] font-extrabold text-[#111827] mb-[6px] relative z-10">Log Today's Meal</h4>
				<p className="text-[0.8rem] text-[#4b5563] mb-[16px] relative z-10 font-medium leading-[1.4]">Track your nutrition to balance your Doshas.</p>
				<button className="w-full py-[12px] bg-[linear-gradient(135deg,#16a34a,#15803d)] text-white rounded-[10px] text-[0.9rem] font-bold border-none cursor-pointer transition-all hover:shadow-[0_4px_12px_rgba(21,128,61,0.3)] hover:-translate-y-[1px] relative z-10">
					Add Meal
				</button>
			</div>

			{/* Modals */}
			{showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
			{showConfirm && (
				<div className="fixed inset-0 bg-[#00000066] backdrop-blur-[4px] flex justify-center items-center z-[999] p-4">
					<div className="bg-white rounded-[24px] p-[32px] w-full max-w-[380px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] text-center animate-[popDigit]">
						<div className="text-[3.5rem] mb-[12px] drop-shadow-md">🚪</div>
						<h3 className="text-[1.4rem] font-bold text-[#111827] mb-[8px]">Log out?</h3>
						<p className="text-[#6b7280] text-[0.95rem] mb-[28px] font-medium">Are you sure you want to exit your workspace?</p>
						<div className="flex gap-[12px]">
							<button onClick={() => setShowConfirm(false)} className="flex-1 py-[12px] rounded-[12px] bg-white border border-[#e2e8f0] text-[#4b5563] font-bold cursor-pointer transition-all hover:bg-[#f8fafc] hover:border-[#cbd5e1] hover:-translate-y-[1px]">Cancel</button>
							<button onClick={handleLogout} className="flex-1 py-[12px] rounded-[12px] bg-[linear-gradient(135deg,#ef4444,#dc2626)] border-none text-white font-bold cursor-pointer transition-all shadow-[0_4px_12px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_16px_rgba(239,68,68,0.4)] hover:-translate-y-[1px]">Logout</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
