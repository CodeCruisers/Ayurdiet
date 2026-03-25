// src/Components/Dashboard/Dietitian/DietitianDashboard.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Context/AuthContext";
import DashboardHeader from "../../Common/DashboardHeader";
import StatsGrid from "../../Common/StatsGrid";
import PracticeOverview from "./PracticeOverview";
import ClientManagement from "./ClientManagement";
import AppointmentSchedule from "./AppointmentSchedule";
import DietPlanManagement from "./DietPlanManagement";
import PracticeAnalytics from "./PracticeAnalytics";
import QuickActions from "../../Common/QuickActions";
import { dietitianDashboardService } from "../../../utils/mockDataService";
import LoadingSpinner from "../../Common/LoadingSpinner";

const DietitianDashboard = () => {
	const { user } = useAuth();
	const [dashboardData, setDashboardData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadDashboardData = async () => {
			try {
				const data = await dietitianDashboardService.getDashboardData(user.id);
				setDashboardData(data);
			} catch (error) {
				console.error("Error loading dashboard data:", error);
			} finally {
				setLoading(false);
			}
		};

		loadDashboardData();
	}, [user.id]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-[50vh] flex-col gap-4">
				<LoadingSpinner
					fullScreen
					text="Loading your practice dashboard..."
					variant="primary"
				/>
			</div>
		);
	}

	if (!dashboardData) {
		return (
			<div className="flex justify-center items-center h-[50vh] flex-col gap-4">
				<p className="text-[#6c757d] text-[1.1rem]">Failed to load dashboard data</p>
			</div>
		);
	}

	const {
		stats,
		practiceOverview,
		clients,
		appointments,
		activePlans,
		analytics,
	} = dashboardData;

	return (
		<div className="p-5 bg-[#f8f9fa] min-h-[100vh] max-[768px]:p-4">
			<DashboardHeader
				title="My Practice"
				user={user}
				welcomeMessage={`Welcome back, ${user.name}! ${practiceOverview.message}`}
			/>

			<div className="max-w-[1400px] mx-auto">
				{/* Practice Stats */}
				<div className="mb-6">
					<StatsGrid stats={stats} />
				</div>

				<div className="grid grid-cols-[1fr_400px] max-[1200px]:grid-cols-1 gap-6 items-start">
					{/* Left Column */}
					<div className="flex flex-col gap-5">
						<PracticeOverview
							data={practiceOverview}
							className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e9ecef] max-[768px]:p-4"
						/>

						<ClientManagement clients={clients} className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e9ecef] max-[768px]:p-4" />

						<DietPlanManagement
							plans={activePlans}
							className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e9ecef] max-[768px]:p-4"
						/>
					</div>

					{/* Right Column */}
					<div className="flex flex-col gap-5">
						<AppointmentSchedule
							appointments={appointments}
							className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e9ecef] max-[768px]:p-4"
						/>

						<PracticeAnalytics
							analytics={analytics}
							className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e9ecef] max-[768px]:p-4"
						/>

						<QuickActions
							actions={[
								{ label: "New Client", icon: "👥", path: "/clients/new" },
								{ label: "Create Plan", icon: "📋", path: "/plans/create" },
								{ label: "Schedule", icon: "📅", path: "/schedule" },
								{ label: "Reports", icon: "📊", path: "/reports" },
							]}
							className="bg-white rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-[#e9ecef] max-[768px]:p-4"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DietitianDashboard;
