import "./Modal.css";

const CancelConfirmModal = ({ appointment, onClose, onConfirm }) => {
	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal danger" onClick={(e) => e.stopPropagation()}>
				<h3>Cancel Appointment</h3>
				<p className="modal-sub">
					Are you sure you want to cancel
					<br />
					<strong>{appointment.title}</strong>?
				</p>

				<div className="modal-actions">
					<button className="btn ghost" onClick={onClose}>
						No, Keep it.
					</button>
					<button
						className="btn cancel"
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
