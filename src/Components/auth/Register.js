import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import AuthLayout from "./AuthLayout";
import InputField from "../Common/InputField";
import Button from "../Common/Button";
import {
	validateEmail,
	validatePassword,
	validateName,
} from "../../utils/validation";

const Register = ({ onToggleMode }) => {
	const { register } = useAuth();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		role: "client", // Default role
		phone: "",
	});
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	const handleChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: "" }));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.firstName) {
			newErrors.firstName = "First name is required";
		} else if (!validateName(formData.firstName)) {
			newErrors.firstName = "Please enter a valid first name";
		}

		if (!formData.lastName) {
			newErrors.lastName = "Last name is required";
		} else if (!validateName(formData.lastName)) {
			newErrors.lastName = "Please enter a valid last name";
		}

		if (!formData.email) {
			newErrors.email = "Email is required";
		} else if (!validateEmail(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (!validatePassword(formData.password)) {
			newErrors.password = "Password must be at least 6 characters long";
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = "Please confirm your password";
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		if (!formData.role) {
			newErrors.role = "Please select your role";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setLoading(true);
		const result = await register(formData);
		setLoading(false);

		if (!result.success) {
			setErrors({ submit: result.error });
		}
	};

	return (
		<AuthLayout
			title="Start your Ayurvedic journey"
			subtitle="Create your AyurDiet account as a client or practitioner"
		>
			<form onSubmit={handleSubmit} className="w-full bg-[linear-gradient(135deg,rgba(247,243,233,0.98),rgba(255,255,255,0.98))] rounded-[20px] pt-[26px] px-[22px] pb-[24px] shadow-[0_16px_40px_rgba(92,68,51,0.18)] border border-[rgba(200,198,195,0.9)] animate-[fadeInLogin_0.8s_ease_forwards] max-[480px]:pt-[20px] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:rounded-[18px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:w-full [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:bg-[rgba(31,26,26,0.04)] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:border [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:border-[rgba(160,200,170,0.1)] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:py-[12px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:px-[14px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:rounded-[10px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:text-[rgba(20,28,25,0.85)] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:mb-[14px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:focus:outline-none [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:focus:border-[#6ea96b] [&_button[type='submit']]:!w-full [&_button[type='submit']]:!py-[12px] [&_button[type='submit']]:!rounded-[10px] [&_button[type='submit']]:!border-none [&_button[type='submit']]:!font-[600] [&_button[type='submit']]:!bg-[linear-gradient(135deg,#6ea96b,#c6a86b)] [&_button[type='submit']]:!text-[#050807] [&_button[type='submit']]:!mt-[12px]">
				{errors.submit && <div className="bg-[rgba(255,230,230,0.95)] text-[#b12929] py-[10px] px-[12px] rounded-[10px] border border-[rgba(255,153,153,0.8)] mb-[16px] text-[0.9rem]">{errors.submit}</div>}

				{/* Role Selection */}
				<div className="mb-[22px]">
					<h4 className="mb-[10px] text-[#333] font-[600] text-[0.95rem]">I am a:</h4>
					<div className="grid grid-cols-2 gap-[12px] mb-[6px] max-[768px]:grid-cols-1">
						<label
							className={`border rounded-[14px] py-[16px] px-[14px] cursor-pointer transition-all duration-[0.25s] ease hover:border-[#e5a43a] hover:shadow-[0_10px_24px_rgba(229,164,58,0.18)] hover:-translate-y-[1px] ${
								formData.role === "client" ? "border-[#558b2f] bg-[#f7f3e9] shadow-[0_10px_26px_rgba(85,139,47,0.2)]" : "border-[#c8c6c3] bg-white"
							}`}
						>
							<input
								type="radio"
								name="role"
								value="client"
								checked={formData.role === "client"}
								onChange={(e) => handleChange("role", e.target.value)}
								className="hidden"
							/>
							<div className="flex items-center gap-[10px]">
								<span className="text-[1.8rem]">👤</span>
								<div className="flex flex-col gap-[3px]">
									<strong className="text-[#333] text-[0.95rem]">Client</strong>
									<span className="text-[#6d4c41] text-[0.8rem]">Seeking Ayurvedic guidance</span>
								</div>
							</div>
						</label>

						<label
							className={`border rounded-[14px] py-[16px] px-[14px] cursor-pointer transition-all duration-[0.25s] ease hover:border-[#e5a43a] hover:shadow-[0_10px_24px_rgba(229,164,58,0.18)] hover:-translate-y-[1px] ${
								formData.role === "dietitian" ? "border-[#558b2f] bg-[#f7f3e9] shadow-[0_10px_26px_rgba(85,139,47,0.2)]" : "border-[#c8c6c3] bg-white"
							}`}
						>
							<input
								type="radio"
								name="role"
								value="dietitian"
								checked={formData.role === "dietitian"}
								onChange={(e) => handleChange("role", e.target.value)}
								className="hidden"
							/>
							<div className="flex items-center gap-[10px]">
								<span className="text-[1.8rem]">🌿</span>
								<div className="flex flex-col gap-[3px]">
									<strong className="text-[#333] text-[0.95rem]">Dietitian</strong>
									<span className="text-[#6d4c41] text-[0.8rem]">Ayurvedic practitioner</span>
								</div>
							</div>
						</label>
					</div>
					{errors.role && <span className="block mt-[4px] text-[0.8rem] text-[#b12929]">{errors.role}</span>}
				</div>

				<div className="grid grid-cols-2 gap-[12px] mb-[6px] max-[768px]:grid-cols-1">
					<InputField
						label="First Name"
						value={formData.firstName}
						onChange={(e) => handleChange("firstName", e.target.value)}
						error={errors.firstName}
						placeholder="Enter your first name"
						required
					/>
					<InputField
						label="Last Name"
						value={formData.lastName}
						onChange={(e) => handleChange("lastName", e.target.value)}
						error={errors.lastName}
						placeholder="Enter your last name"
						required
					/>
				</div>

				<InputField
					label="Email Address"
					type="email"
					value={formData.email}
					onChange={(e) => handleChange("email", e.target.value)}
					error={errors.email}
					placeholder="your@email.com"
					required
					icon="✉️"
				/>

				<InputField
					label="Phone Number"
					type="tel"
					value={formData.phone}
					onChange={(e) => handleChange("phone", e.target.value)}
					placeholder="+91 98765 43210"
					icon="📞"
				/>

				<InputField
					label="Password"
					type="password"
					value={formData.password}
					onChange={(e) => handleChange("password", e.target.value)}
					error={errors.password}
					placeholder="Create a password (min. 6 characters)"
					required
					icon="🔒"
				/>

				<InputField
					label="Confirm Password"
					type="password"
					value={formData.confirmPassword}
					onChange={(e) => handleChange("confirmPassword", e.target.value)}
					error={errors.confirmPassword}
					placeholder="Confirm your password"
					required
					icon="🔒"
				/>

				<div className="my-[20px] mb-[14px]">
					<label className="flex items-start gap-[10px] cursor-pointer text-[#6d4c41] leading-[1.4] text-[0.85rem]">
						<input type="checkbox" required className="mt-[3px] shrink-0 w-[15px] h-[15px] accent-[#558b2f] !mb-0" />
						<span>
							I agree to the{" "}
							<a href="#terms" className="text-[#da8a1d] no-underline font-[500] hover:underline">
								Terms of Service
							</a>{" "}
							and{" "}
							<a href="#privacy" className="text-[#da8a1d] no-underline font-[500] hover:underline">
								Privacy Policy
							</a>
						</span>
					</label>
				</div>

				<Button type="submit" variant="primary" loading={loading} fullWidth>
					Create {formData.role === "dietitian" ? "Practitioner" : "Client"}{" "}
					Account
				</Button>

				<div className="mt-[1.3rem] text-center text-[0.9rem] text-[#5c4433]">
					Already have an account?{" "}
					<button type="button" onClick={onToggleMode} className="border-none bg-transparent text-[#558b2f] font-[700] underline cursor-pointer px-[2px] hover:text-[#6aa84f]">
						Sign in
					</button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default Register;
