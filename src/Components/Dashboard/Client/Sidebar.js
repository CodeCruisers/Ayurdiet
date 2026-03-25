import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import logo from "../../../Images/client.jpg";
import SettingsModal from "./SettingsModal";

const Sidebar = ({ activeView, setActiveView }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const [showConfirm, setShowConfirm] = useState(false);

	const [showSettings, setShowSettings] = useState(false);

	const handleLogout = () => {
		logout(); // clear auth + storage
		navigate("/"); // go to homepage
	};

	const navLinkBase = "no-underline px-[15px] py-2.5 rounded-lg transition-colors duration-300 hover:bg-gray-800 hover:text-gray-100";
	const navLinkSubBase = "no-underline px-[15px] py-1 rounded-lg text-[0.95rem] transition-colors duration-300 relative ml-[15px] hover:bg-gray-800 hover:text-gray-100";
	
	const getNavLinkClass = (view) => {
		return activeView === view 
			? `${navLinkBase} bg-[#1c2027] text-[#c5c5c5]` 
			: `${navLinkBase} text-gray-200`;
	};

	const getNavSubClass = (view) => {
		return activeView === view 
			? `${navLinkSubBase} bg-[#1c2027] text-[#c5c5c5]` 
			: `${navLinkSubBase} text-gray-400`;
	};

	return (
		<div className="h-[90vh] w-[15vw] bg-gradient-to-b from-[#111217] to-[#0b0c10] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col items-center p-5 overflow-y-auto border border-white/5 [&::-webkit-scrollbar]:w-[6px]">
			<div className="text-[1.5rem] font-semibold text-gray-200 mb-2.5 z-10">
				<img src={logo} alt="Profile Icon" className="w-[80px] h-[80px] rounded-full bg-[#2d2f36] flex items-center justify-center mb-[15px]" />
			</div>

			<div className="mt-[15px] w-full flex flex-col gap-3 text-white z-10">
				<div className="w-full h-px bg-[#cfcece]/10" />
				<Link
					onClick={() => setActiveView("dashboard")}
					className={getNavLinkClass("dashboard")}
				>
					Dashboard
				</Link>
				<Link
					onClick={() => setActiveView("analytics")}
					className={getNavSubClass("analytics")}
				>
					Analytics
				</Link>
				<Link
					onClick={() => setActiveView("dashboard")}
					className={getNavSubClass("")}
				>
					Dietitian
				</Link>
				<Link
					onClick={() => setActiveView("dashboard")}
					className={getNavSubClass("")}
				>
					Medical
				</Link>
				<Link
					onClick={() => setActiveView("dashboard")}
					className={getNavSubClass("")}
				>
					Diet Plan
				</Link>
				<Link
					onClick={() => setActiveView("chat")}
					className={getNavSubClass("chat")}
				>
					Chat
				</Link>
				<Link
					onClick={() => setActiveView("appointments")}
					className={getNavSubClass("appointments")}
				>
					Appointments
				</Link>
				<div className="w-full h-px bg-[#cfcece]/10" />
				<span className="text-[#fefeff] px-[15px] py-[7px] rounded-lg text-[0.95rem] ml-0 cursor-default">Recipies</span>
				<Link
					onClick={() => setActiveView("cookbook")}
					className={getNavSubClass("cookbook")}
				>
					Cookbook
				</Link>
				<Link
					onClick={() => setActiveView("favorites")}
					className={getNavSubClass("favorites")}
				>
					Favorites
				</Link>

				<div className="w-full h-px bg-[#cfcece]/10" />
				<div className="text-[#fefeff] px-[15px] py-[7px] rounded-lg text-[0.95rem] ml-0 cursor-default">Support</div>
				<Link
					onClick={() => setActiveView("contact")}
					className={getNavSubClass("contact")}
				>
					Contact Us
				</Link>
				<Link
					onClick={() => setActiveView("call")}
					className={getNavSubClass("call")}
				>
					Call Us
				</Link>
				<Link
					onClick={() => setActiveView("chatbot")}
					className={getNavSubClass("chatbot")}
				>
					Chat with AI
				</Link>

				<div className="w-full h-px bg-[#cfcece]/10" />
				<span className="text-[#fefeff] px-[15px] py-[7px] rounded-lg text-[0.95rem] ml-0 cursor-default">Miscellaneous</span>
				<Link className="no-underline text-gray-400 px-[15px] py-1 rounded-lg text-[0.95rem] transition-colors duration-300 relative ml-[15px] hover:bg-gray-800 hover:text-gray-100" onClick={() => setShowSettings(true)}>
					Settings
				</Link>
				<Link
					className="no-underline text-gray-400 px-[15px] py-1 rounded-lg text-[0.95rem] transition-colors duration-300 relative ml-[15px] hover:bg-gray-800 hover:text-gray-100"
					onClick={() => setShowConfirm(true)}
				>
					Logout
				</Link>
			</div>

			{/* Settings model */}
			{showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}

			{/* Confirm Modal */}
			{showConfirm && (
				<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
					<div className="bg-[#141c19]/95 rounded-[18px] px-[35px] py-[30px] w-[320px] text-center border border-[#8cc8a0]/15 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
						<h3 className="text-[#e7efe9] mb-2.5 text-xl font-semibold m-0">Log out?</h3>
						<p className="text-[#9fb4a7] text-[0.95rem] m-0 mb-4">Are you sure you want to log out of your account?</p>

						<div className="mt-[25px] flex justify-between">
							<button
								className="bg-transparent border border-white/20 text-[#9fb4a7] px-5 py-2.5 rounded-lg cursor-pointer"
								onClick={() => setShowConfirm(false)}
							>
								Cancel
							</button>
							<button className="bg-gradient-to-br from-[#6ea88f] to-[#b8a46d] text-[#0b1411] px-[22px] py-2.5 rounded-lg border-none font-semibold cursor-pointer shadow-[0_8px_20px_rgba(110,168,143,0.4)]" onClick={handleLogout}>
								Logout
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
