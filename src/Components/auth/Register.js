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
			<form onSubmit={handleSubmit} className="w-full bg-white rounded-[20px] pt-[26px] px-[22px] pb-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e2e8f0] animate-[fadeInLogin_0.5s_ease_forwards] max-[480px]:pt-[20px] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:rounded-[16px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:w-full [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:bg-[#f8fafc] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:border [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:border-[#e2e8f0] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:py-[12px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:px-[14px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:rounded-[10px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:text-[#333] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:mb-[14px] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:focus:outline-none [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:focus:border-[#6DBE45] [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:focus:ring-1 [&_input[type='text'],&_input[type='email'],&_input[type='password'],&_input[type='tel']]:focus:ring-[#6DBE45] [&_button[type='submit']]:!w-full [&_button[type='submit']]:!py-[12px] [&_button[type='submit']]:!rounded-[10px] [&_button[type='submit']]:!border-none [&_button[type='submit']]:!font-[600] [&_button[type='submit']]:!bg-[#6DBE45] [&_button[type='submit']]:!text-white [&_button[type='submit']]:!mt-[12px] [&_button[type='submit']]:hover:!bg-[#5aa839]">
				{errors.submit && <div className="bg-[#fef2f2] text-[#ef4444] py-[10px] px-[12px] rounded-[10px] border border-[#fca5a5] mb-[16px] text-[0.9rem] font-medium">{errors.submit}</div>}

				{/* Role Selection */}
				<div className="mb-[22px]">
					<h4 className="mb-[10px] text-[#333] font-[600] text-[0.95rem]">I am a:</h4>
					<div className="grid grid-cols-2 gap-[12px] mb-[6px] max-[768px]:grid-cols-1">
						<label
							className={`border rounded-[14px] py-[16px] px-[14px] cursor-pointer transition-all duration-[0.2s] ease hover:border-[#f59e0b] hover:shadow-[0_4px_12px_rgba(245,158,11,0.1)] ${
								formData.role === "client" ? "border-[#6DBE45] bg-[#f0f9ed] shadow-[0_4px_12px_rgba(109,190,69,0.15)] ring-1 ring-[#6DBE45]" : "border-[#e2e8f0] bg-white text-[#4b5563]"
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
									<strong className="text-[#111827] text-[0.95rem]">Client</strong>
									<span className="text-[#6b7280] text-[0.8rem]">Seeking Ayurvedic guidance</span>
								</div>
							</div>
						</label>

						<label
							className={`border rounded-[14px] py-[16px] px-[14px] cursor-pointer transition-all duration-[0.2s] ease hover:border-[#f59e0b] hover:shadow-[0_4px_12px_rgba(245,158,11,0.1)] ${
								formData.role === "dietitian" ? "border-[#6DBE45] bg-[#f0f9ed] shadow-[0_4px_12px_rgba(109,190,69,0.15)] ring-1 ring-[#6DBE45]" : "border-[#e2e8f0] bg-white text-[#4b5563]"
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
									<strong className="text-[#111827] text-[0.95rem]">Dietitian</strong>
									<span className="text-[#6b7280] text-[0.8rem]">Ayurvedic practitioner</span>
								</div>
							</div>
						</label>
					</div>
					{errors.role && <span className="block mt-[4px] text-[0.8rem] text-[#ef4444] font-medium">{errors.role}</span>}
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
					<label className="flex items-start gap-[10px] cursor-pointer text-[#4b5563] font-medium leading-[1.4] text-[0.85rem]">
						<input type="checkbox" required className="mt-[3px] shrink-0 w-[15px] h-[15px] accent-[#6DBE45] !mb-0 rounded-[4px]" />
						<span>
							I agree to the{" "}
							<a href="#terms" className="text-[#f59e0b] no-underline font-[600] hover:underline">
								Terms of Service
							</a>{" "}
							and{" "}
							<a href="#privacy" className="text-[#f59e0b] no-underline font-[600] hover:underline">
								Privacy Policy
							</a>
						</span>
					</label>
				</div>

				<Button type="submit" variant="primary" loading={loading} fullWidth>
					Create {formData.role === "dietitian" ? "Practitioner" : "Client"}{" "}
					Account
				</Button>

				<div className="mt-[1.3rem] text-center text-[0.9rem] text-[#4b5563]">
					Already have an account?{" "}
					<button type="button" onClick={onToggleMode} className="border-none bg-transparent text-[#6DBE45] font-[700] underline cursor-pointer px-[2px] hover:text-[#5aa839]">
						Sign in
					</button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default Register;
