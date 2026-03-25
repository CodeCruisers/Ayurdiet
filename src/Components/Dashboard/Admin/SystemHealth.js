import React from "react";

const SystemHealth = ({ system, recentActivity, className = "" }) => {
	const {
		uptime,
		responseTime,
		activeSessions,
		errorRate,
		serverLoad,
		databaseStatus,
	} = system;

	const getStatusLevel = (value, thresholds) => {
		if (value <= thresholds.good) return "good";
		if (value <= thresholds.warning) return "warning";
		return "critical";
	};

	const getUptimeStatus = (uptime) => {
		return getStatusLevel(100 - uptime, { good: 1, warning: 5 });
	};

	const getResponseTimeStatus = (responseTime) => {
		return getStatusLevel(responseTime, { good: 200, warning: 500 });
	};

	const getErrorRateStatus = (errorRate) => {
		return getStatusLevel(errorRate, { good: 1, warning: 5 });
	};

	const getServerLoadStatus = (load) => {
		return getStatusLevel(load, { good: 70, warning: 85 });
	};

	const getStatusIndicatorColor = (status) => {
		return {
			good: "bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]",
			warning: "bg-amber-500 shadow-[0_0_0_2px_rgba(245,158,11,0.2)]",
			critical: "bg-red-500 shadow-[0_0_0_2px_rgba(239,68,68,0.2)]",
		}[status] || "bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]";
	};

	const getMetricBorderColor = (status) => {
		return {
			good: "border-l-4 border-l-emerald-500",
			warning: "border-l-4 border-l-amber-500",
			critical: "border-l-4 border-l-red-500",
		}[status] || "border-l-4 border-l-emerald-500";
	};

	return (
		<div className={`bg-white ${className}`}>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-6 pb-4 border-b border-slate-200">
				<h3 className="m-0 text-primary-green text-[1.3rem] font-semibold">System Health</h3>
				<div className="flex items-center gap-2">
					<span className={`w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0 ${getStatusIndicatorColor(getUptimeStatus(uptime))}`}></span>
					<span className="text-sm text-emerald-600 font-medium">All Systems Operational</span>
				</div>
			</div>

			<div className="mb-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div className={`flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50 transition-all duration-300 hover:bg-[#f0f9f0] hover:border-primary-green ${getMetricBorderColor(getUptimeStatus(uptime))}`}>
						<div className="text-[1.5rem]">🟢</div>
						<div className="flex-1">
							<div className="text-[1.3rem] font-bold text-primary-green mb-0.5">{uptime}%</div>
							<div className="text-xs text-slate-500 uppercase tracking-wide">Uptime</div>
						</div>
					</div>

					<div className={`flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50 transition-all duration-300 hover:bg-[#f0f9f0] hover:border-primary-green ${getMetricBorderColor(getResponseTimeStatus(responseTime))}`}>
						<div className="text-[1.5rem]">⚡</div>
						<div className="flex-1">
							<div className="text-[1.3rem] font-bold text-primary-green mb-0.5">{responseTime}ms</div>
							<div className="text-xs text-slate-500 uppercase tracking-wide">Response Time</div>
						</div>
					</div>

					<div className={`flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50 transition-all duration-300 hover:bg-[#f0f9f0] hover:border-primary-green ${getMetricBorderColor(getErrorRateStatus(errorRate))}`}>
						<div className="text-[1.5rem]">📊</div>
						<div className="flex-1">
							<div className="text-[1.3rem] font-bold text-primary-green mb-0.5">{errorRate}%</div>
							<div className="text-xs text-slate-500 uppercase tracking-wide">Error Rate</div>
						</div>
					</div>

					<div className={`flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50 transition-all duration-300 hover:bg-[#f0f9f0] hover:border-primary-green ${getMetricBorderColor(getServerLoadStatus(serverLoad))}`}>
						<div className="text-[1.5rem]">🔧</div>
						<div className="flex-1">
							<div className="text-[1.3rem] font-bold text-primary-green mb-0.5">{serverLoad}%</div>
							<div className="text-xs text-slate-500 uppercase tracking-wide">Server Load</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-6">
				<h4 className="m-0 mb-3 text-slate-700 text-[1.1rem] font-semibold">Database Status</h4>
				<div className={`flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 p-4 border border-slate-200 rounded-xl bg-slate-50 transition-all duration-300 hover:bg-[#f0f9f0] hover:border-primary-green ${databaseStatus === "connected" ? "border-l-4 border-l-emerald-500" : "border-l-4 border-l-red-500"}`}>
					<div className={`w-3 h-3 rounded-full flex-shrink-0 ${databaseStatus === "connected" ? "bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]" : "bg-red-500 shadow-[0_0_0_2px_rgba(239,68,68,0.2)]"}`}></div>
					<div className="flex-1">
						<div className="text-[0.95rem] font-semibold text-gray-800 mb-0.5">Primary Database</div>
						<div className="text-xs text-gray-500">
							{databaseStatus === "connected"
								? "All connections healthy"
								: "Connection issues detected"}
						</div>
					</div>
					<div className="w-full md:w-auto text-right md:text-left">
						<button className="bg-transparent border border-primary-green text-primary-green hover:bg-emerald-50 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 w-full md:w-auto">Test</button>
					</div>
				</div>
			</div>

			<div className="mb-0">
				<h4 className="m-0 mb-3 text-slate-700 text-[1.1rem] font-semibold">Recent Activity</h4>
				<div className="flex flex-col gap-2 max-h-[200px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
					{recentActivity.map((activity, index) => {
						const severityColor = {
							"info": "bg-blue-100 text-blue-600",
							"warning": "bg-amber-100 text-amber-600",
							"error": "bg-red-100 text-red-600"
						}[activity.severity.toLowerCase()] || "bg-slate-100 text-slate-600";
						
						return (
							<div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 p-3 border border-slate-200 rounded-lg bg-slate-50 transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
								<div className="text-[1.2rem] w-6 text-center">{activity.icon}</div>
								<div className="flex-1">
									<div className="text-sm text-gray-800 mb-0.5">{activity.message}</div>
									<div className="text-xs text-gray-500">{activity.time}</div>
								</div>
								<div className={`px-2 py-1 rounded-xl text-[0.7rem] font-semibold uppercase tracking-wide self-end md:self-auto ${severityColor}`}>
									{activity.severity}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mt-5 pt-4 border-t border-slate-200">
				<button className="bg-transparent border-none text-primary-green text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-light-green w-full md:w-auto md:text-left">View Logs</button>
				<button className="bg-primary-green text-white border-none py-2 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-light-green w-full md:w-auto">Run Diagnostics</button>
			</div>
		</div>
	);
};

export default SystemHealth;
