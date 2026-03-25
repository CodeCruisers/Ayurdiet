import React from "react";

const PlatformOverview = ({ data, className = "" }) => {
	const {
		activeUsers,
		retentionRate,
		avgSession,
		supportTickets,
		growth,
		performance,
	} = data;

	return (
		<div className={`bg-gradient-to-br from-white to-slate-50 ${className}`}>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-slate-200 gap-3 md:gap-0">
				<h3 className="m-0 text-primary-green text-[1.3rem] font-semibold">Platform Overview</h3>
				<span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-600">All Systems Operational</span>
			</div>

			<div className="mb-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-5">
					<div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
						<div className="text-[1.8rem] font-bold text-primary-green mb-1">{activeUsers}</div>
						<div className="text-sm text-slate-500 mb-2 uppercase tracking-wide">Active Users</div>
						<div className="text-xs font-semibold px-2 py-0.5 rounded-xl inline-block bg-emerald-100 text-emerald-600">+12% this week</div>
					</div>

					<div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
						<div className="text-[1.8rem] font-bold text-primary-green mb-1">{retentionRate}</div>
						<div className="text-sm text-slate-500 mb-2 uppercase tracking-wide">Retention Rate</div>
						<div className="text-xs font-semibold px-2 py-0.5 rounded-xl inline-block bg-emerald-100 text-emerald-600">+3%</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-5">
					<div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
						<div className="text-[1.8rem] font-bold text-primary-green mb-1">{avgSession}</div>
						<div className="text-sm text-slate-500 mb-2 uppercase tracking-wide">Avg Session</div>
						<div className="text-xs font-semibold px-2 py-0.5 rounded-xl inline-block bg-slate-100 text-slate-500">±0</div>
					</div>

					<div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
						<div className="text-[1.8rem] font-bold text-primary-green mb-1">{supportTickets}</div>
						<div className="text-sm text-slate-500 mb-2 uppercase tracking-wide">Support Tickets</div>
						<div className="text-xs font-semibold px-2 py-0.5 rounded-xl inline-block bg-red-100 text-red-600">-5 today</div>
					</div>
				</div>
			</div>

			<div>
				<h4 className="m-0 mb-4 text-slate-700 text-[1.1rem] font-semibold">Performance Metrics</h4>
				<div className="flex flex-col gap-3">
					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
						<div className="w-auto md:w-[100px] text-sm text-slate-500 font-medium">Uptime</div>
						<div className="w-full md:flex-1 h-2 bg-slate-200 rounded overflow-hidden">
							<div
								className="h-full rounded transition-all duration-300 bg-gradient-to-r from-emerald-500 to-emerald-400"
								style={{ width: `${performance.uptime}%` }}
							></div>
						</div>
						<div className="w-auto md:w-[60px] text-left md:text-right text-sm font-semibold text-slate-700">{performance.uptime}%</div>
					</div>

					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
						<div className="w-auto md:w-[100px] text-sm text-slate-500 font-medium">Response Time</div>
						<div className="w-full md:flex-1 h-2 bg-slate-200 rounded overflow-hidden">
							<div
								className="h-full rounded transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-400"
								style={{ width: `${performance.responseTime}%` }}
							></div>
						</div>
						<div className="w-auto md:w-[60px] text-left md:text-right text-sm font-semibold text-slate-700">{performance.responseTime}ms</div>
					</div>

					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
						<div className="w-auto md:w-[100px] text-sm text-slate-500 font-medium">Error Rate</div>
						<div className="w-full md:flex-1 h-2 bg-slate-200 rounded overflow-hidden">
							<div
								className="h-full rounded transition-all duration-300 bg-gradient-to-r from-red-500 to-red-400"
								style={{ width: `${performance.errorRate}%` }}
							></div>
						</div>
						<div className="w-auto md:w-[60px] text-left md:text-right text-sm font-semibold text-slate-700">{performance.errorRate}%</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlatformOverview;
