import React from "react";

const FinancialOverview = ({ financials, className = "" }) => {
	const { revenue, subscriptions, payouts, growth } = financials;

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	};

	const formatPercent = (value) => {
		return `${value > 0 ? "+" : ""}${value}%`;
	};

	const getRevenueChangeClass = (value) => {
		return `text-xs font-semibold px-2 py-0.5 rounded-xl inline-block ${value >= 0 ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`;
	};

	return (
		<div className={`bg-white ${className}`}>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-6 pb-4 border-b border-slate-200">
				<h3 className="m-0 text-primary-green text-[1.3rem] font-semibold">Financial Overview</h3>
				<div className="flex items-center gap-2">
					<select className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm text-slate-700">
						<option value="monthly">This Month</option>
						<option value="quarterly">This Quarter</option>
						<option value="yearly">This Year</option>
					</select>
				</div>
			</div>

			<div className="mb-6">
				<h4 className="m-0 mb-4 text-slate-700 text-[1.1rem] font-semibold">Revenue</h4>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
						<div className="text-xs text-slate-500 uppercase tracking-wide mb-2">Monthly</div>
						<div className="text-[1.5rem] font-bold text-primary-green mb-1">{formatCurrency(revenue.monthly)}</div>
						<div className={getRevenueChangeClass(growth.monthly)}>{formatPercent(growth.monthly)}</div>
					</div>

					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
						<div className="text-xs text-slate-500 uppercase tracking-wide mb-2">Quarterly</div>
						<div className="text-[1.5rem] font-bold text-primary-green mb-1">{formatCurrency(revenue.quarterly)}</div>
						<div className={getRevenueChangeClass(growth.quarterly)}>{formatPercent(growth.quarterly)}</div>
					</div>

					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
						<div className="text-xs text-slate-500 uppercase tracking-wide mb-2">Yearly</div>
						<div className="text-[1.5rem] font-bold text-primary-green mb-1">{formatCurrency(revenue.yearly)}</div>
						<div className={getRevenueChangeClass(growth.yearly)}>{formatPercent(growth.yearly)}</div>
					</div>
				</div>
			</div>

			<div className="mb-6">
				<h4 className="m-0 mb-4 text-slate-700 text-[1.1rem] font-semibold">Subscriptions</h4>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
						<div className="text-[1.3rem] font-bold text-primary-green mb-1">{subscriptions.active.toLocaleString()}</div>
						<div className="text-xs text-slate-500 uppercase tracking-wide">Active Subscriptions</div>
					</div>

					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
						<div className="text-[1.3rem] font-bold text-primary-green mb-1">+{subscriptions.newThisMonth}</div>
						<div className="text-xs text-slate-500 uppercase tracking-wide">New This Month</div>
					</div>

					<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
						<div className="text-[1.3rem] font-bold text-primary-green mb-1">{subscriptions.churnRate}</div>
						<div className="text-xs text-slate-500 uppercase tracking-wide">Churn Rate</div>
					</div>
				</div>
			</div>

			<div className="mb-6">
				<h4 className="m-0 mb-4 text-slate-700 text-[1.1rem] font-semibold">Recent Payouts</h4>
				<div className="flex flex-col gap-2 max-h-[200px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
					{payouts.map((payout, index) => {
						const statusColor = {
							"completed": "bg-emerald-100 text-emerald-600",
							"pending": "bg-amber-100 text-amber-600",
							"failed": "bg-red-100 text-red-600"
						}[payout.status.toLowerCase()] || "bg-slate-100 text-slate-600";
						
						return (
							<div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 p-3 bg-slate-50 border border-slate-200 rounded-lg transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
								<div className="flex-1">
									<div className="text-sm font-semibold text-gray-800 mb-0.5">{payout.recipient}</div>
									<div className="text-xs text-gray-500">{payout.date}</div>
								</div>
								<div className="text-sm font-semibold text-emerald-600 m-0 md:mx-3">{formatCurrency(payout.amount)}</div>
								<div className={`px-2 py-1 rounded-xl text-[0.7rem] font-semibold uppercase tracking-wide ${statusColor}`}>{payout.status}</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-3 mt-5 pt-4 border-t border-slate-200">
				<button className="bg-transparent border border-primary-green text-primary-green hover:bg-emerald-50 py-2 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 w-full md:w-auto">Download Report</button>
				<button className="bg-primary-green text-white border-none py-2 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-light-green w-full md:w-auto">Generate Invoice</button>
			</div>
		</div>
	);
};

export default FinancialOverview;
