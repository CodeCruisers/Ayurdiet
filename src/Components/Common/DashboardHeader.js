import React from "react";
import { useAuth } from "../../Context/AuthContext";

const DashboardHeader = ({
	title,
	user,
	welcomeMessage,
	onRefresh,
	refreshLoading,
}) => {
	const { logout } = useAuth();

	return (
		<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 dashboard-header">
			<div className="header-left">
				<h1 className="text-2xl font-bold text-gray-800 m-0">{title}</h1>
				<p className="text-gray-600 m-0 mt-1 welcome-message">{welcomeMessage}</p>
			</div>
			<div className="flex flex-wrap md:flex-nowrap items-center w-full md:w-auto justify-between md:justify-end gap-[10px] md:gap-[15px] header-right">
				{onRefresh && (
					<button
						onClick={onRefresh}
						disabled={refreshLoading}
						className="refresh-btn flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all shadow-sm"
					>
						{refreshLoading ? "🔄" : "↻"} Refresh
					</button>
				)}
				<div className="flex flex-col items-start md:items-end gap-1 flex-1 md:flex-none order-1 md:order-none mb-[10px] md:mb-0 w-full md:w-auto user-info">
					<span className="font-semibold text-gray-800 leading-tight user-name">{user?.name}</span>
					<span className="text-sm text-gray-500 user-role">{user?.role}</span>
				</div>
				<div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] bg-gradient-to-br from-primary-green to-light-green rounded-full flex items-center justify-center text-white font-semibold text-[0.9rem] md:text-base border-[3px] border-[#e8f5e8] shadow-[0_4px_12px_rgba(45,90,39,0.15)] order-2 md:order-none user-avatar">
					{user?.name?.[0]?.toUpperCase()}
				</div>
				<button onClick={logout} className="order-3 md:order-none flex-1 md:flex-none px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors logout-btn">
					Logout
				</button>
			</div>
		</div>
	);
};
export default DashboardHeader;
