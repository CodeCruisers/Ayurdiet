import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="error-wrapper">
			{/* Floating decorative shapes */}
			<div className="error-floating el-a"></div>
			<div className="error-floating el-b"></div>
			<div className="error-floating el-c"></div>

			<div className="error-card">
				<div className="error-404">
					<span className="digit">4</span>
					<span className="digit zero">0</span>
					<span className="digit">4</span>
				</div>

				<h2 className="error-title">Oops! Page Not Found</h2>

				<p className="error-desc">
					Looks like the page you're trying to reach doesn't exist or has been
					moved.
				</p>

				<Link to="/" className="error-btn">
					Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
