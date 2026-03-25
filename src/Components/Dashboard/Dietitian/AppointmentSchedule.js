// src/Components/Dashboard/Dietitian/AppointmentSchedule.js
import React from "react";
// import "./AppointmentSchedule.css";

const AppointmentSchedule = ({ appointments, className = "" }) => {
	const getStatusBadge = (status) => {
		const statusConfig = {
			confirmed: { label: "Confirmed", class: "confirmed" },
			pending: { label: "Pending", class: "pending" },
			cancelled: { label: "Cancelled", class: "cancelled" },
		};

		const config = statusConfig[status] || { label: status, class: "default" };
		return (
			<span className={`status-badge ${config.class}`}>{config.label}</span>
		);
	};

	return (
		<div className={`appointment-schedule ${className}`}>
			<div className="flex justify-between items-center mb-4 max-[768px]:flex-col max-[768px]:gap-3 max-[768px]:items-stretch">
				<h2 className="m-0 flex-1 text-[#2c3e50] text-[1.25rem] font-semibold">Today's Appointments</h2>
				<button className="schedule-btn">+ New</button>
			</div>

			<div className="appointments-list">
				{appointments.map((appointment) => (
					<div key={appointment.id} className="appointment-item">
						<div className="appointment-time">
							<span className="time">{appointment.time}</span>
						</div>

						<div className="appointment-details">
							<h4 className="client-name">{appointment.client}</h4>
							<p className="appointment-type">{appointment.type}</p>
							{getStatusBadge(appointment.status)}
						</div>

						<div className="appointment-actions">
							<button className="action-btn primary">
								{appointment.status === "pending" ? "Confirm" : "Start"}
							</button>
							<button className="action-btn secondary">Reschedule</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AppointmentSchedule;
