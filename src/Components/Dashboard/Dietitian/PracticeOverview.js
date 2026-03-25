// src/Components/Dashboard/Dietitian/PracticeOverview.js
import React from "react";
// import "./PracticeOverview.css";

const PracticeOverview = ({ data, className = "" }) => {
	return (
		<div className={`practice-overview ${className}`}>
			<h2 className="m-[0_0_16px_0] text-[#2c3e50] text-[1.25rem] font-semibold">Practice Overview</h2>
			<div className="overview-content">
				<div className="overview-message">
					<p>{data.message}</p>
				</div>

				<div className="overview-stats">
					<div className="stat-item">
						<span className="stat-value">{data.growth}</span>
						<span className="stat-label">Growth</span>
					</div>
					<div className="stat-item">
						<span className="stat-value">{data.activeClients}</span>
						<span className="stat-label">Active Clients</span>
					</div>
					<div className="stat-item">
						<span className="stat-value">{data.monthlySessions}</span>
						<span className="stat-label">Monthly Sessions</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PracticeOverview;
