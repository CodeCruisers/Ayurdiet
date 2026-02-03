import { useState } from "react";
import "./Contact.css";

const Contact = () => {
	const [showSuccess, setShowSuccess] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSuccess(true);
	};

	const closeSuccess = () => {
		setShowSuccess(false);
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className="contact-page">
			<div className="contact-header">
				<h1>Contact Us</h1>
				<p>We’re here to help 🌿 Reach out anytime.</p>
			</div>

			<div className="contact-content">
				<div className="contact-card form-card">
					<h3>Send a Message</h3>

					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<textarea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<button type="submit">Send Message</button>
					</form>
				</div>

				<div className="contact-card info-card">
					<h3>Other Ways</h3>
					<div className="info-item">📧 ayurdietauth@outlook.com</div>
					<div className="info-item">📞 +91 12345 67890</div>
					<div className="info-item">🤖 Chat with AI</div>
				</div>
			</div>

			{showSuccess && (
				<div className="success-overlay">
					<div className="success-modal">
						<span className="success-icon">✅</span>
						<h3>Message sent successfully!</h3>
						<p>We’ll reach out to you ASAP.</p>
						<button onClick={closeSuccess}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Contact;
