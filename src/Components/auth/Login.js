import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import AuthLayout from "./AuthLayout";
import InputField from "../Common/InputField";
import Button from "../Common/Button";
import { validateEmail, validatePassword } from "../../utils/validation";

const Login = ({ onToggleMode }) => {
	const { login } = useAuth();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
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

		if (!formData.email) newErrors.email = "Email is required";
		else if (!validateEmail(formData.email))
			newErrors.email = "Please enter a valid email address";

		if (!formData.password) newErrors.password = "Password is required";
		else if (!validatePassword(formData.password))
			newErrors.password = "Password must be at least 6 characters long";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setLoading(true);
		const result = await login(formData.email, formData.password);
		setLoading(false);

		if (!result.success) setErrors({ submit: result.error });
	};

	return (
		<AuthLayout
			title="Welcome back"
			subtitle="Sign in to your AyurDiet workspace"
		>
			<form onSubmit={handleSubmit} className="w-full bg-white rounded-[20px] pt-[26px] px-[22px] pb-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#e2e8f0] animate-[fadeInLogin_0.5s_ease_forwards] max-[480px]:pt-[20px] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:rounded-[16px] [&_input]:w-full [&_input]:bg-[#f8fafc] [&_input]:border [&_input]:border-[#e2e8f0] [&_input]:py-[12px] [&_input]:px-[14px] [&_input]:rounded-[10px] [&_input]:text-[#333] [&_input]:mb-[14px] [&_input]:focus:outline-none [&_input]:focus:border-[#6DBE45] [&_input]:focus:ring-1 [&_input]:focus:ring-[#6DBE45] [&_button[type='submit']]:!w-full [&_button[type='submit']]:!py-[12px] [&_button[type='submit']]:!rounded-[10px] [&_button[type='submit']]:!border-none [&_button[type='submit']]:!font-[600] [&_button[type='submit']]:!bg-[#6DBE45] [&_button[type='submit']]:!text-white [&_button[type='submit']]:!mt-[12px] [&_button[type='submit']]:hover:!bg-[#5aa839]">
				{errors.submit && (
					<div className="bg-[#fef2f2] text-[#ef4444] py-[10px] px-[12px] rounded-[10px] border border-[#fca5a5] mb-[16px] text-[0.9rem] font-medium">{errors.submit}</div>
				)}

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
					label="Password"
					type="password"
					value={formData.password}
					onChange={(e) => handleChange("password", e.target.value)}
					error={errors.password}
					placeholder="Enter your password"
					required
					icon="🔒"
				/>

				<div className="flex justify-between items-center mt-[10px] mb-[18px] gap-[12px] text-[0.9rem] max-[480px]:flex-col max-[480px]:items-start">
					<label className="flex items-center gap-[8px] text-[#4b5563] font-medium cursor-pointer">
						<input type="checkbox" className="w-[15px] h-[15px] accent-[#6DBE45] !mb-0 rounded-[4px]" />
						<span>Remember me</span>
					</label>
					<a href="#forgot-password" className="text-[#f59e0b] font-[600] no-underline hover:underline">
						Forgot password?
					</a>
				</div>

				<Button type="submit" variant="primary" loading={loading} fullWidth>
					Sign In
				</Button>

				<div className="text-center my-[18px] mb-[16px] relative text-[#6b7280] text-[0.85rem] font-medium before:content-[''] before:absolute before:h-[1px] before:bg-[#e2e8f0] before:left-0 before:right-0 before:top-1/2">
					<span className="relative px-[10px] bg-white">Or continue with</span>
				</div>

				<div className="grid grid-cols-2 gap-[10px] mb-[16px]">
					<button type="button" className="bg-white border border-[#e2e8f0] text-[#333] p-[10px] rounded-[12px] font-[600] text-[0.9rem] cursor-pointer flex justify-center gap-[6px] items-center transition-all duration-[0.2s] ease hover:border-[#6DBE45] hover:bg-[#f8faf8]">
						<span className="text-[1.1rem]">🔍</span> Google
					</button>
					<button type="button" className="bg-white border border-[#e2e8f0] text-[#333] p-[10px] rounded-[12px] font-[600] text-[0.9rem] cursor-pointer flex justify-center gap-[6px] items-center transition-all duration-[0.2s] ease hover:border-[#6DBE45] hover:bg-[#f8faf8]">
						<span className="text-[1.1rem]">💼</span> LinkedIn
					</button>
				</div>

				<div className="text-center text-[#4b5563] text-[0.9rem] mt-[6px]">
					Don&apos;t have an account?{" "}
					<button type="button" onClick={onToggleMode} className="border-none bg-transparent text-[#6DBE45] font-[700] underline cursor-pointer px-[2px] hover:text-[#5aa839]">
						Sign up
					</button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default Login;
