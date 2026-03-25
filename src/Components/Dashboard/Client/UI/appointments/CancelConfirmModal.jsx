const CancelConfirmModal = ({ appointment, onClose, onConfirm }) => {
	return (
		<div className="fixed inset-0 bg-black/90 backdrop-blur-[2px] flex items-center justify-center z-[1000]" onClick={onClose}>
			<div className="w-full max-w-[420px] bg-[#120c0c] rounded-[18px] p-6 border border-red-400/25 shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-[modalIn_0.25s_ease]" onClick={(e) => e.stopPropagation()}>
				<h3 className="text-[1.1rem] font-semibold mb-1.5 text-[#e7efe9] m-0">Cancel Appointment</h3>
				<p className="text-[0.85rem] leading-[1.5] text-[#d6a3a3] mb-5 m-0">
					Are you sure you want to cancel
					<br />
					<strong>{appointment.title}</strong>?
				</p>

				<div className="flex justify-end gap-3 mt-[22px]">
					<button className="px-3 py-1.5 text-[0.75rem] rounded-lg border-none cursor-pointer bg-white/5 text-[#9fb4a7] hover:bg-white/10" onClick={onClose}>
						No, Keep it.
					</button>
					<button
						className="px-3 py-1.5 text-[0.75rem] rounded-lg border-none cursor-pointer bg-red-400/20 text-[#ff9f9f] hover:bg-red-400/35"
						onClick={() => onConfirm(appointment.id)}
					>
						Yes, Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default CancelConfirmModal;
