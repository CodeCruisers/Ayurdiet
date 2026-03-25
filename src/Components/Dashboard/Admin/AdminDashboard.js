import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Context/AuthContext";
import DashboardHeader from "../../Common/DashboardHeader";
import StatsGrid from "../../Common/StatsGrid";
import PlatformOverview from "./PlatformOverview";
import UserManagement from "./UserManagement";
import ContentManagement from "./ContentManagement";
import FinancialOverview from "./FinancialOverview";
import SystemHealth from "./SystemHealth";
import QuickActions from "../../Common/QuickActions";
import { adminDashboardService } from "../../../utils/mockDataService";

const AdminDashboard = () => {
	const { user } = useAuth();
	const [dashboardData, setDashboardData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [refreshKey, setRefreshKey] = useState(0);

	useEffect(() => {
		const loadDashboardData = async () => {
			try {
				const data = await adminDashboardService.getDashboardData();
				setDashboardData(data);
			} catch (error) {
				console.error("Error loading dashboard data:", error);
			} finally {
				setLoading(false);
			}
		};

		loadDashboardData();
	}, [refreshKey]);

	const handleRefresh = () => {
		setLoading(true);
		setRefreshKey((prev) => prev + 1);
	};

	if (loading || !dashboardData) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[400px] gap-5 text-slate-500">
				<div className="loading-spinner-large"></div>
				<p>Loading platform dashboard...</p>
			</div>
		);
	}

	const {
		stats,
		platformOverview,
		users,
		content,
		financials,
		systemHealth,
		recentActivity,
	} = dashboardData;

	const dashboardCardClass = "bg-white rounded-2xl p-[15px] md:p-5 xl:p-[25px] shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-slate-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-[2px]";

	return (
		<div className="min-h-screen bg-slate-50 p-2.5 md:p-[15px] xl:p-5">
			<DashboardHeader
				title="Platform Administration"
				user={user}
				welcomeMessage="Complete platform oversight and management"
				onRefresh={handleRefresh}
				refreshLoading={loading}
			/>

			<div className="max-w-[1400px] mx-auto">
				{/* Platform Stats */}
				<div className="mb-[30px]">
					<StatsGrid stats={stats} />
				</div>

				<div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-5 xl:gap-[25px]">
					{/* Left Column */}
					<div className="flex flex-col gap-5 xl:gap-[25px]">
						<PlatformOverview
							data={platformOverview}
							className={dashboardCardClass}
						/>

						<UserManagement users={users} className={dashboardCardClass} />

						<ContentManagement
							content={content}
							className={dashboardCardClass}
						/>
					</div>

					{/* Right Column */}
					<div className="flex flex-col gap-5 xl:gap-[25px]">
						<FinancialOverview
							financials={financials}
							className={dashboardCardClass}
						/>

						<SystemHealth
							system={systemHealth}
							recentActivity={recentActivity}
							className={dashboardCardClass}
						/>

						<QuickActions
							actions={[
								{
									label: "User Management",
									icon: "👥",
									path: "/admin/users",
									color: "primary",
								},
								{
									label: "Content Review",
									icon: "📝",
									path: "/admin/content",
									color: "secondary",
								},
								{
									label: "Financial Reports",
									icon: "💰",
									path: "/admin/financials",
									color: "accent",
								},
								{
									label: "System Settings",
									icon: "⚙️",
									path: "/admin/settings",
									color: "primary",
								},
							]}
							className={dashboardCardClass}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
