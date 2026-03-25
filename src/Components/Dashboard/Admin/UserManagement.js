import React, { useState } from "react";

const UserManagement = ({ users, className = "" }) => {
	const [selectedUser, setSelectedUser] = useState(null);
	const [filter, setFilter] = useState("all");

	const filteredUsers = users.filter((user) => {
		if (filter === "all") return true;
		return user.status === filter;
	});

	const getStatusBadge = (status) => {
		const statusConfig = {
			pending: { label: "Pending", class: "bg-amber-100 text-amber-600" },
			active: { label: "Active", class: "bg-emerald-100 text-emerald-600" },
			verified: { label: "Verified", class: "bg-blue-100 text-blue-600" },
			suspended: { label: "Suspended", class: "bg-red-100 text-red-600" },
		};

		const config = statusConfig[status] || statusConfig.pending;
		return (
			<span className={`px-2 py-1 rounded-xl text-[0.7rem] font-semibold uppercase tracking-wide ${config.class}`}>{config.label}</span>
		);
	};

	const getUserTypeIcon = (type) => {
		const icons = {
			client: "👤",
			dietitian: "🌿",
			admin: "⚙️",
		};
		return icons[type] || "👤";
	};

	const handleUserAction = (userId, action) => {
		console.log(`Action ${action} on user ${userId}`);
		// Implement user actions here
	};

	return (
		<div className={`bg-white ${className}`}>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-5 pb-4 border-b border-slate-200">
				<h3 className="m-0 text-primary-green text-[1.3rem] font-semibold">User Management</h3>
				<div className="flex w-full md:w-auto justify-between md:justify-start items-center gap-3">
					<select
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-green"
					>
						<option value="all">All Users</option>
						<option value="pending">Pending</option>
						<option value="active">Active</option>
						<option value="verified">Verified</option>
						<option value="suspended">Suspended</option>
					</select>
					<button className="bg-primary-green text-white border-none py-2 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-light-green">+ Add User</button>
				</div>
			</div>

			<div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
				{filteredUsers.map((user) => (
					<div
						key={user.id}
						className={`flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-4 border rounded-xl cursor-pointer transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0] ${
							selectedUser?.id === user.id ? "border-primary-green bg-emerald-50 shadow-[0_2px_8px_rgba(45,90,39,0.1)]" : "border-slate-200 bg-[#fafdf9]"
						}`}
						onClick={() => setSelectedUser(user)}
					>
						<div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-white rounded-xl flex items-center justify-center text-[1.2rem] border-2 border-slate-200">{getUserTypeIcon(user.type)}</div>

						<div className="flex-1">
							<div className="flex items-center gap-3 mb-1">
								<h4 className="m-0 text-base font-semibold text-gray-800">{user.name}</h4>
								{getStatusBadge(user.status)}
							</div>
							<p className="m-0 mb-2 text-sm text-gray-500">{user.email}</p>
							<div className="flex items-center gap-4 text-xs">
								<span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded-xl capitalize font-medium">{user.type}</span>
								<span className="text-gray-400">Joined {user.joinDate}</span>
							</div>
						</div>

						<div className="flex w-full md:w-auto justify-end gap-2">
							{user.status === "pending" && (
								<>
									<button
										className="px-3 py-1.5 border-none rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-emerald-500 text-white hover:bg-emerald-600"
										onClick={(e) => {
											e.stopPropagation();
											handleUserAction(user.id, "approve");
										}}
									>
										Approve
									</button>
									<button
										className="px-3 py-1.5 border-none rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-red-500 text-white hover:bg-red-600"
										onClick={(e) => {
											e.stopPropagation();
											handleUserAction(user.id, "reject");
										}}
									>
										Reject
									</button>
								</>
							)}

							{user.status === "active" && (
								<button
									className="px-3 py-1.5 border-none rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-amber-500 text-white hover:bg-amber-600"
									onClick={(e) => {
										e.stopPropagation();
										handleUserAction(user.id, "suspend");
									}}
								>
									Suspend
								</button>
							)}

							<button
								className="px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-transparent text-primary-green border border-primary-green hover:bg-emerald-50 hover:text-primary-green"
								onClick={(e) => {
									e.stopPropagation();
									handleUserAction(user.id, "view");
								}}
							>
								View
							</button>
						</div>
					</div>
				))}
			</div>

			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mt-5 pt-4 border-t border-slate-200">
				<span className="text-sm text-gray-500">
					Showing {filteredUsers.length} of {users.length} users
				</span>
				<button className="bg-transparent border-none text-primary-green text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-light-green">View All Users →</button>
			</div>
		</div>
	);
};

export default UserManagement;
