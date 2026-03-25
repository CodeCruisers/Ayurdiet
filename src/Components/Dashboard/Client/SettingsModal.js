import React, { useState } from "react";

const SettingsModal = ({ onClose }) => {
	const [settings, setSettings] = useState({
		theme: "dark",
		language: "English",
		timezone: "IST",
		autoSave: true,
		sound: false,
		emailUpdates: true,
		sessionTimeout: "30 min",
		dataSharing: false,
		compactLayout: false,
	});

	const toggle = (key) => {
		setSettings({ ...settings, [key]: !settings[key] });
	};

	const update = (key, value) => {
		setSettings({ ...settings, [key]: value });
	};

	const getToggleClass = (isOn) => {
		return `w-[44px] h-[22px] rounded-full relative cursor-pointer before:content-[''] before:w-[18px] before:h-[18px] before:absolute before:top-[2px] before:rounded-full before:transition-all before:duration-[250ms] ${isOn ? "bg-blue-500 before:left-[24px] before:bg-white" : "bg-gray-800 before:left-[2px] before:bg-gray-500"}`;
	};

	return (
		<div className="fixed inset-0 bg-black/75 backdrop-blur-[10px] flex justify-center items-center z-[1000]">
			<div className="w-[min(90vw,520px)] max-h-[85vh] bg-gradient-to-b from-[#0f1216] to-[#090b0f] rounded-[20px] flex flex-col text-gray-200 border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
				<div className="p-5 md:px-6 md:py-5 flex justify-between items-center border-b border-white/5">
					<h2 className="m-0">Settings</h2>
					<button className="bg-transparent text-gray-400 border-none text-[1.3rem] cursor-pointer" onClick={onClose}>✕</button>
				</div>

				<div className="p-5 overflow-y-auto [&::-webkit-scrollbar]:w-2">
					{/* Interface */}
					<div className="mb-7">
						<h4 className="text-[0.8rem] text-gray-400 mb-3 tracking-[1px] uppercase m-0">Interface</h4>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Theme</span>
							<select
								className="bg-[#1a1f26] text-gray-200 border-none px-3 py-2 rounded-lg outline-none"
								value={settings.theme}
								onChange={(e) => update("theme", e.target.value)}
							>
								<option>Dark</option>
								<option>Light</option>
							</select>
						</div>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Compact Layout</span>
							<div
								onClick={() => toggle("compactLayout")}
								className={getToggleClass(settings.compactLayout)}
							/>
						</div>
					</div>

					{/* Regional */}
					<div className="mb-7">
						<h4 className="text-[0.8rem] text-gray-400 mb-3 tracking-[1px] uppercase m-0">Regional</h4>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Language</span>
							<select
								className="bg-[#1a1f26] text-gray-200 border-none px-3 py-2 rounded-lg outline-none"
								value={settings.language}
								onChange={(e) => update("language", e.target.value)}
							>
								<option>English</option>
								<option>Hindi</option>
							</select>
						</div>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Time Zone</span>
							<select
								className="bg-[#1a1f26] text-gray-200 border-none px-3 py-2 rounded-lg outline-none"
								value={settings.timezone}
								onChange={(e) => update("timezone", e.target.value)}
							>
								<option>IST</option>
								<option>GMT</option>
								<option>PST</option>
							</select>
						</div>
					</div>

					{/* System */}
					<div className="mb-7">
						<h4 className="text-[0.8rem] text-gray-400 mb-3 tracking-[1px] uppercase m-0">System</h4>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Auto Save</span>
							<div
								onClick={() => toggle("autoSave")}
								className={getToggleClass(settings.autoSave)}
							/>
						</div>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Sound Effects</span>
							<div
								onClick={() => toggle("sound")}
								className={getToggleClass(settings.sound)}
							/>
						</div>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Session Timeout</span>
							<select
								className="bg-[#1a1f26] text-gray-200 border-none px-3 py-2 rounded-lg outline-none"
								value={settings.sessionTimeout}
								onChange={(e) => update("sessionTimeout", e.target.value)}
							>
								<option>15 min</option>
								<option>30 min</option>
								<option>1 hour</option>
							</select>
						</div>
					</div>

					{/* Privacy */}
					<div className="mb-7">
						<h4 className="text-[0.8rem] text-gray-400 mb-3 tracking-[1px] uppercase m-0">Privacy</h4>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Email Updates</span>
							<div
								onClick={() => toggle("emailUpdates")}
								className={getToggleClass(settings.emailUpdates)}
							/>
						</div>
						<div className="flex justify-between items-center px-[14px] py-3 bg-white/5 rounded-xl mb-2.5">
							<span className="text-[0.95rem]">Data Sharing</span>
							<div
								onClick={() => toggle("dataSharing")}
								className={getToggleClass(settings.dataSharing)}
							/>
						</div>
					</div>
				</div>

				<div className="px-6 py-[18px] flex justify-between border-t border-white/5">
					<button className="bg-transparent border border-white/20 text-gray-400 px-5 py-2.5 rounded-lg cursor-pointer" onClick={onClose}>
						Cancel
					</button>
					<button className="bg-blue-500 border-none text-white px-6 py-2.5 rounded-lg cursor-pointer" onClick={onClose}>Save Changes</button>
				</div>
			</div>
		</div>
	);
};

export default SettingsModal;
