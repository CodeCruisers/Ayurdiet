import { useState } from "react";

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
		<div className="fixed inset-0 bg-black/90 backdrop-blur-[2px] flex items-center justify-center z-[1000]" onClick={onClose}>
			<div className="w-full max-w-[420px] bg-[#0b1411] rounded-[18px] p-6 border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-[modalIn_0.25s_ease]" onClick={(e) => e.stopPropagation()}>
				<h3 className="text-[1.1rem] font-semibold mb-1.5 text-[#e7efe9] m-0">Reschedule Appointment</h3>
				<p className="text-[0.85rem] leading-[1.5] text-[#8fa39a] mb-5 m-0">{appointment.title}</p>

				<div className="flex flex-col mb-4">
					<label className="text-[0.72rem] uppercase tracking-[0.5px] text-[#6f8379] mb-1.5">New Date</label>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className="px-3 py-2.5 rounded-[10px] bg-[#101c18] border border-white/5 text-[#e7efe9] text-[0.85rem] focus:outline-none focus:border-blue-400/40 focus:bg-[#0f1a16]"
					/>
				</div>

				<div className="flex flex-col mb-4">
					<label className="text-[0.72rem] uppercase tracking-[0.5px] text-[#6f8379] mb-1.5">New Time</label>
					<input
						type="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
						className="px-3 py-2.5 rounded-[10px] bg-[#101c18] border border-white/5 text-[#e7efe9] text-[0.85rem] focus:outline-none focus:border-blue-400/40 focus:bg-[#0f1a16]"
					/>
				</div>

				<div className="flex justify-end gap-3 mt-[22px]">
					<button className="px-3 py-1.5 text-[0.75rem] rounded-lg border-none cursor-pointer bg-white/5 text-[#9fb4a7] hover:bg-white/10" onClick={onClose}>
						Close
					</button>
					<button
						className="px-3 py-1.5 text-[0.75rem] rounded-lg border-none cursor-pointer bg-blue-400/35 text-[#e7efe9] hover:bg-blue-400/50"
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
