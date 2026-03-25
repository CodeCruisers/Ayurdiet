import { useState } from "react";
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
		<div className="w-full h-full px-8 text-[#e7efe9] animate-[pageFade_0.4s_ease] mb-10 max-[600px]:p-5">
			{/* Header */}
			<div className="mb-6">
				<p className="text-[0.95rem] text-[#9fb4a7]">You have {appointments.length} appointments scheduled</p>
			</div>

			{/* Next Appointment */}
			{upcomingAppointment && (
				<div className="mb-[26px] p-[18px] rounded-[14px] bg-blue-400/12 border border-blue-400/35">
					<h3 className="text-[1rem] mb-1.5 m-0">📅 Your Next Appointment</h3>
					<p className="font-semibold mb-1 m-0">{upcomingAppointment.title}</p>
					<p className="m-0">
						{formatDate(upcomingAppointment.date)} at{" "}
						{formatTime(upcomingAppointment.time)}
					</p>
				</div>
			)}

			{/* Table */}
			<div className="w-full rounded-[14px] overflow-hidden border border-white/5 bg-[#ffffff05]">
				<div className="grid grid-cols-[2fr_1.2fr_1.2fr_1fr_1.4fr] max-[900px]:grid-cols-[2fr_1fr_1fr_1fr] p-[14px_18px] text-[0.75rem] uppercase text-[#9fb4a7] bg-white/5">
					<span>Title</span>
					<span>Date</span>
					<span>Time</span>
					<span>Status</span>
					<span className="max-[900px]:hidden">Actions</span>
				</div>

				{appointments.length === 0 && (
					<p className="p-4 text-center text-gray-400">You don’t have any appointments yet ✨</p>
				)}

				{appointments.map((appt) => {
					const isSoonMatch = isSoon(appt.date);
					return (
					<div
						key={appt.id}
						className={`grid grid-cols-[2fr_1.2fr_1.2fr_1fr_1.4fr] max-[900px]:grid-cols-[2fr_1fr_1fr_1fr] p-[14px_18px] items-center border-t border-white/5 hover:bg-white/5 ${isSoonMatch ? "bg-blue-400/10" : ""}`}
					>
						<span className="text-[0.9rem]">{appt.title}</span>
						<span className="text-[0.9rem]">{formatDate(appt.date)}</span>
						<span className="text-[0.9rem]">{formatTime(appt.time)}</span>
						<span className={`px-3.5 py-1.5 rounded-full text-[0.8rem] w-fit ${appt.status === "Confirmed" ? "bg-[#6ea96b]/20 text-[#6ea96b]" : appt.status === "Pending" ? "bg-yellow-400/20 text-yellow-400" : "bg-red-400/20 text-[#ff9f9f]"}`}>
							{statusLabel[appt.status]}
						</span>

						{/* ACTIONS */}
						<div className="flex gap-2.5 max-[900px]:hidden">
							{/* ✅ Reschedule for ALL statuses */}
							<button
								className="px-3 py-1.5 text-[0.75rem] rounded-lg border-none cursor-pointer bg-white/10 text-[#e7efe9] hover:bg-blue-400/30"
								onClick={() => openReschedule(appt)}
							>
								Reschedule
							</button>

							{/* ❌ Cancel only if confirmed */}
							{appt.status === "Confirmed" && (
								<button className="px-3 py-1.5 text-[0.75rem] rounded-lg border-none cursor-pointer bg-red-400/20 text-[#ff9f9f] hover:bg-red-400/35" onClick={() => openCancel(appt)}>
									Cancel
								</button>
							)}
						</div>
					</div>
					);
				})}
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
