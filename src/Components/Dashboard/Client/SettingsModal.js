import React, { useState } from "react";
import "./SettingsModal.css";

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

	return (
		<div className="settings-overlay">
			<div className="settings-modal">
				<div className="settings-header">
					<h2>Settings</h2>
					<button onClick={onClose}>✕</button>
				</div>

				<div className="settings-body">
					{/* Interface */}
					<div className="settings-section">
						<h4>Interface</h4>
						<div className="setting-row">
							<span>Theme</span>
							<select
								value={settings.theme}
								onChange={(e) => update("theme", e.target.value)}
							>
								<option>Dark</option>
								<option>Light</option>
							</select>
						</div>
						<div className="setting-row">
							<span>Compact Layout</span>
							<div
								onClick={() => toggle("compactLayout")}
								className={`toggle ${settings.compactLayout ? "on" : ""}`}
							/>
						</div>
					</div>

					{/* Regional */}
					<div className="settings-section">
						<h4>Regional</h4>
						<div className="setting-row">
							<span>Language</span>
							<select
								value={settings.language}
								onChange={(e) => update("language", e.target.value)}
							>
								<option>English</option>
								<option>Hindi</option>
							</select>
						</div>
						<div className="setting-row">
							<span>Time Zone</span>
							<select
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
					<div className="settings-section">
						<h4>System</h4>
						<div className="setting-row">
							<span>Auto Save</span>
							<div
								onClick={() => toggle("autoSave")}
								className={`toggle ${settings.autoSave ? "on" : ""}`}
							/>
						</div>
						<div className="setting-row">
							<span>Sound Effects</span>
							<div
								onClick={() => toggle("sound")}
								className={`toggle ${settings.sound ? "on" : ""}`}
							/>
						</div>
						<div className="setting-row">
							<span>Session Timeout</span>
							<select
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
					<div className="settings-section">
						<h4>Privacy</h4>
						<div className="setting-row">
							<span>Email Updates</span>
							<div
								onClick={() => toggle("emailUpdates")}
								className={`toggle ${settings.emailUpdates ? "on" : ""}`}
							/>
						</div>
						<div className="setting-row">
							<span>Data Sharing</span>
							<div
								onClick={() => toggle("dataSharing")}
								className={`toggle ${settings.dataSharing ? "on" : ""}`}
							/>
						</div>
					</div>
				</div>

				<div className="settings-footer">
					<button className="cancel-btn" onClick={onClose}>
						Cancel
					</button>
					<button className="save-btn" onClick={onClose}>Save Changes</button>
				</div>
			</div>
		</div>
	);
};

export default SettingsModal;
