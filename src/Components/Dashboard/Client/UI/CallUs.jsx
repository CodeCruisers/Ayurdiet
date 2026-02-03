import "./CallUs.css";

const CallUs = () => {
	return (
		<div className="callus-page">
			<div className="callus-header">
				<h1>Call Us</h1>
				<p>Prefer talking to a real human? We’re just a call away 🌿</p>
			</div>

			<div className="callus-content">
				{/* Main Call Card */}
				<div className="callus-card main-card">
					<div className="call-icon">📞</div>
					<h3>Customer Support</h3>
					<p className="call-number">+91 12345 67890</p>
					<p className="call-time">Available Mon – Sat, 9:00 AM – 6:00 PM</p>

					<a href="tel:+911234567890" className="call-btn">
						Call Now
					</a>
				</div>

				{/* Alternative Options */}
				<div className="callus-card options-card">
					<h3>Other Options</h3>

					<div className="option-item">
						<span>📧</span>
						<p>
							Email us at <strong>ayurdietauth@outlook.com</strong>
						</p>
					</div>

					<div className="option-item">
						<span>🤖</span>
						<p>Chat with our AI assistant for quick help</p>
					</div>

					<div className="option-item">
						<span>🕒</span>
						<p>Request a callback at your convenience</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallUs;
