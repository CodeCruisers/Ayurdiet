import { useState } from "react";
import "./Appointments.css";
import { appointmentsData } from "../../../../../Data/appointments";
import RescheduleModal from "./RescheduleModal";
import CancelConfirmModal from "./CancelConfirmModal";

const Appointments = () => {
	// ================= STATE =================
	const [appointments, setAppointments] = useState(appointmentsData);
	const [selectedAppt, setSelectedAppt] = useState(null);
	const [showReschedule, setShowReschedule] = useState(false);
	const [showCancel, setShowCancel] = useState(false);

	// ================= HELPERS =================
	const formatDate = (date) =>
		new Date(date).toLocaleDateString("en-IN", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});

	const formatTime = (time24) => {
		if (!time24) return "";
		const [hours, minutes] = time24.split(":");
		const h = Number(hours);
		const suffix = h >= 12 ? "PM" : "AM";
		const hour12 = h % 12 || 12;
		return `${hour12}:${minutes} ${suffix}`;
	};

	const isSoon = (date) => {
		const diff = (new Date(date) - new Date()) / (1000 * 60 * 60 * 24);
		return diff >= 0 && diff <= 3;
	};

	const upcomingAppointment = appointments
		.filter((a) => a.status !== "Cancelled")
		.sort((a, b) => new Date(a.date) - new Date(b.date))[0];

	const statusLabel = {
		Confirmed: "Confirmed ✅",
		Pending: "Pending ⏳",
		Cancelled: "Cancelled ❌",
	};

	// ================= MODAL HANDLERS =================
	const openReschedule = (appt) => {
		setSelectedAppt(appt);
		setShowReschedule(true);
	};

	const openCancel = (appt) => {
		setSelectedAppt(appt);
		setShowCancel(true);
	};

	const closeModal = () => {
		setSelectedAppt(null);
		setShowReschedule(false);
		setShowCancel(false);
	};

	// ================= ACTION LOGIC =================
	const handleReschedule = (id, newDate, newTime) => {
		setAppointments((prev) =>
			prev.map((appt) =>
				appt.id === id
					? {
							...appt,
							date: newDate,
							time: newTime,
							// 🔥 cancelled → pending, others stay same
							status: appt.status === "Cancelled" ? "Pending" : appt.status,
						}
					: appt,
			),
		);
		closeModal();
	};

	const handleCancel = (id) => {
		setAppointments((prev) =>
			prev.map((appt) =>
				appt.id === id ? { ...appt, status: "Cancelled" } : appt,
			),
		);
		closeModal();
	};

	return (
		<div className="appointments-page">
			{/* Header */}
			<div className="appointments-header">
				<p>You have {appointments.length} appointments scheduled</p>
			</div>

			{/* Next Appointment */}
			{upcomingAppointment && (
				<div className="next-appointment">
					<h3>📅 Your Next Appointment</h3>
					<p className="next-title">{upcomingAppointment.title}</p>
					<p>
						{formatDate(upcomingAppointment.date)} at{" "}
						{formatTime(upcomingAppointment.time)}
					</p>
				</div>
			)}

			{/* Table */}
			<div className="appointments-table">
				<div className="table-head">
					<span>Title</span>
					<span>Date</span>
					<span>Time</span>
					<span>Status</span>
					<span>Actions</span>
				</div>

				{appointments.length === 0 && (
					<p className="empty-state">You don’t have any appointments yet ✨</p>
				)}

				{appointments.map((appt) => (
					<div
						key={appt.id}
						className={`table-row ${isSoon(appt.date) ? "soon" : ""}`}
					>
						<span>{appt.title}</span>
						<span>{formatDate(appt.date)}</span>
						<span>{formatTime(appt.time)}</span>
						<span className={`status ${appt.status.toLowerCase()}`}>
							{statusLabel[appt.status]}
						</span>

						{/* ACTIONS */}
						<div className="actions">
							{/* ✅ Reschedule for ALL statuses */}
							<button
								className="btn reschedule"
								onClick={() => openReschedule(appt)}
							>
								Reschedule
							</button>

							{/* ❌ Cancel only if confirmed */}
							{appt.status === "Confirmed" && (
								<button className="btn cancel" onClick={() => openCancel(appt)}>
									Cancel
								</button>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Modals */}
			{showReschedule && selectedAppt && (
				<RescheduleModal
					appointment={selectedAppt}
					onClose={closeModal}
					onConfirm={handleReschedule}
				/>
			)}

			{showCancel && selectedAppt && (
				<CancelConfirmModal
					appointment={selectedAppt}
					onClose={closeModal}
					onConfirm={handleCancel}
				/>
			)}
		</div>
	);
};

export default Appointments;
