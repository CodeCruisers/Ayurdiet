import React, { useMemo } from "react";
import "./AuthLayout.css";

const FEATURES = [
	"AI Dosha Analysis",
	"Smart Diet Plans",
	"Client Management",
	"Progress Tracking",
	"Billing Automation",
	"Daily Reminders",
	"Recipe Suggestions",
	"Nutrient Insights",
	"Scheduling",
	"Lifestyle Guidance",
];

const AuthLayout = ({ children, title, subtitle }) => {
	return (
		<div className="auth-fullscreen">
			{/* Glass Card with Brand + Page Title + Form */}
			<div className="center-form-wrapper">
				<div className="glass-login-card">
					<div className="auth-card-header">
						<div className="auth-brand">
							<div className="auth-brand-mark">🌿</div>
							<div className="auth-brand-text">
								<h1>AyurDiet</h1>
								<p>Ayurveda-first practice & nutrition management</p>
							</div>
						</div>

						{(title || subtitle) && (
							<div className="auth-page-title">
								{title && <h2>{title}</h2>}
								{subtitle && <p>{subtitle}</p>}
							</div>
						)}
					</div>
					{children}
				</div>
			</div>

			{/* Background soft blobs */}
			<div className="background-canvas">
				<div className="floating-element el-1" />
				<div className="floating-element el-2" />
				<div className="floating-element el-3" />
				<div className="floating-element el-4" />
			</div>
		</div>
	);
};

export default AuthLayout;
