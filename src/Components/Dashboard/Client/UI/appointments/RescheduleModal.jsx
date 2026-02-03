import { useState } from "react";
import "./Modal.css";

// Convert 12h -> 24h for <input type="time" />
const to24Hour = (time) => {
	if (!time.includes("AM") && !time.includes("PM")) return time;

	const [t, modifier] = time.split(" ");
	let [hours, minutes] = t.split(":");

	if (modifier === "PM" && hours !== "12") {
		hours = String(Number(hours) + 12);
	}
	if (modifier === "AM" && hours === "12") {
		hours = "00";
	}

	return `${hours.padStart(2, "0")}:${minutes}`;
};

const RescheduleModal = ({ appointment, onClose, onConfirm }) => {
	const [date, setDate] = useState(appointment.date);
	const [time, setTime] = useState(to24Hour(appointment.time));

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<h3>Reschedule Appointment</h3>
				<p className="modal-sub">{appointment.title}</p>

				<div className="modal-field">
					<label>New Date</label>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>

				<div className="modal-field">
					<label>New Time</label>
					<input
						type="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
				</div>

				<div className="modal-actions">
					<button className="btn ghost" onClick={onClose}>
						Close
					</button>
					<button
						className="btn primary"
						onClick={() => onConfirm(appointment.id, date, time)}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default RescheduleModal;
