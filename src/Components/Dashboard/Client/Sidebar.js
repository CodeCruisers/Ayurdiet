import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import logo from "../../../Images/client.jpg";
import SettingsModal from "./SettingsModal";
import "./Sidebar.css";

const Sidebar = ({ activeView, setActiveView }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const [showConfirm, setShowConfirm] = useState(false);

	const [showSettings, setShowSettings] = useState(false);

	const handleLogout = () => {
		logout(); // clear auth + storage
		navigate("/"); // go to homepage
	};

	return (
		<div id="sidebar">
			<div className="sidebar-header">
				<img src={logo} alt="Profile Icon" id="profile-icon" />
			</div>

			<div id="navigation_links">
				<div className="line" />
				<Link
					onClick={() => setActiveView("dashboard")}
					className={
						activeView === "dashboard" ? "nav-link active" : "nav-link"
					}
				>
					Dashboard
				</Link>
				<Link
					onClick={() => setActiveView("analytics")}
					className={
						activeView === "analytics" ? "nav-link-sub active" : "nav-link-sub"
					}
				>
					Analytics
				</Link>
				<Link
					onClick={() => setActiveView("dashboard")}
					className={activeView === "" ? "nav-link-sub active" : "nav-link-sub"}
				>
					Dietitian
				</Link>
				<Link
					onClick={() => setActiveView("dashboard")}
					className={activeView === "" ? "nav-link-sub active" : "nav-link-sub"}
				>
					Medical
				</Link>
				<Link
					onClick={() => setActiveView("dashboard")}
					className={activeView === "" ? "nav-link-sub active" : "nav-link-sub"}
				>
					Diet Plan
				</Link>
				<Link
					onClick={() => setActiveView("chat")}
					className={
						activeView === "chat" ? "nav-link-sub active" : "nav-link-sub"
					}
				>
					Chat
				</Link>
				<Link
					onClick={() => setActiveView("appointments")}
					className={
						activeView === "appointments"
							? "nav-link-sub active"
							: "nav-link-sub"
					}
				>
					Appointments
				</Link>
				<div className="line" />
				<Link className="nav-link-static">Recipies</Link>
				<Link
					onClick={() => setActiveView("cookbook")}
					className={
						activeView === "cookbook" ? "nav-link-sub active" : "nav-link-sub"
					}
				>
					Cookbook
				</Link>
				<Link
					onClick={() => setActiveView("favorites")}
					className={
						activeView === "favorites" ? "nav-link-sub active" : "nav-link-sub"
					}
				>
					Favorites
				</Link>

				<div className="line" />
				<div className="nav-link-static">Support</div>
				<Link
					onClick={() => setActiveView("contact")}
					className={
						activeView === "contact" ? "nav-link-sub active" : "nav-link-sub"
					}
				>
					Contact Us
				</Link>
				<Link
					onClick={() => setActiveView("call")}
					className={
						activeView === "call" ? "nav-link-sub active" : "nav-link-sub"
					}
				>
					Call Us
				</Link>
				<Link
					onClick={() => setActiveView("chatbot")}
					className={
						activeView === "chatbot" ? "nav-link-sub active" : "nav-link-sub"
					}
				>
					Chat with AI
				</Link>

				<div className="line" />
				<Link className="nav-link-static">Miscellaneous</Link>
				<Link className="nav-link-sub" onClick={() => setShowSettings(true)}>
					Settings
				</Link>
				<Link
					className="nav-link-sub logout-btn"
					onClick={() => setShowConfirm(true)}
				>
					Logout
				</Link>
			</div>

			{/* Settings model */}
			{showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}

			{/* Confirm Modal */}
			{showConfirm && (
				<div className="logout-modal-overlay">
					<div className="logout-modal">
						<h3>Log out?</h3>
						<p>Are you sure you want to log out of your account?</p>

						<div className="logout-actions">
							<button
								className="cancel-btn"
								onClick={() => setShowConfirm(false)}
							>
								Cancel
							</button>
							<button className="confirm-btn" onClick={handleLogout}>
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
