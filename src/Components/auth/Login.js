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
			<form onSubmit={handleSubmit} className="w-full bg-[linear-gradient(135deg,rgba(247,243,233,0.98),rgba(255,255,255,0.98))] rounded-[20px] pt-[26px] px-[22px] pb-[24px] shadow-[0_16px_40px_rgba(92,68,51,0.18)] border border-[rgba(200,198,195,0.9)] animate-[fadeInLogin_0.8s_ease_forwards] max-[480px]:pt-[20px] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:rounded-[18px] [&_input]:w-full [&_input]:bg-[rgba(31,26,26,0.04)] [&_input]:border [&_input]:border-[rgba(160,200,170,0.1)] [&_input]:py-[12px] [&_input]:px-[14px] [&_input]:rounded-[10px] [&_input]:text-[rgba(20,28,25,0.85)] [&_input]:mb-[14px] [&_input]:focus:outline-none [&_input]:focus:border-[#6ea96b] [&_button[type='submit']]:!w-full [&_button[type='submit']]:!py-[12px] [&_button[type='submit']]:!rounded-[10px] [&_button[type='submit']]:!border-none [&_button[type='submit']]:!font-[600] [&_button[type='submit']]:!bg-[linear-gradient(135deg,#6ea96b,#c6a86b)] [&_button[type='submit']]:!text-[#050807] [&_button[type='submit']]:!mt-[12px]">
				{errors.submit && (
					<div className="bg-[rgba(255,230,230,0.95)] text-[#b12929] py-[10px] px-[12px] rounded-[10px] border border-[rgba(255,153,153,0.8)] mb-[16px] text-[0.9rem]">{errors.submit}</div>
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
					<label className="flex items-center gap-[8px] text-[#5c6f63] cursor-pointer">
						<input type="checkbox" className="w-[15px] h-[15px] accent-[#558b2f] !mb-0" />
						<span>Remember me</span>
					</label>
					<a href="#forgot-password" className="text-[#da8a1d] font-[600] no-underline hover:underline">
						Forgot password?
					</a>
				</div>

				<Button type="submit" variant="primary" loading={loading} fullWidth>
					Sign In
				</Button>

				<div className="text-center my-[18px] mb-[16px] relative text-[#6d4c41] text-[0.8rem] before:content-[''] before:absolute before:h-[1px] before:bg-[rgba(200,198,195,0.8)] before:left-0 before:right-0 before:top-1/2">
					<span className="relative px-[10px] bg-[rgba(247,243,233,0.96)]">Or continue with</span>
				</div>

				<div className="grid grid-cols-2 gap-[10px] mb-[16px]">
					<button type="button" className="bg-white border border-[#c8c6c3] p-[10px] rounded-[12px] font-[600] text-[0.9rem] cursor-pointer flex justify-center gap-[6px] items-center transition-all duration-[0.2s] ease hover:border-[#558b2f] hover:shadow-[0_10px_24px_rgba(85,139,47,0.22)] hover:-translate-y-[1px]">
						<span className="text-[1.1rem]">🔍</span> Google
					</button>
					<button type="button" className="bg-white border border-[#c8c6c3] p-[10px] rounded-[12px] font-[600] text-[0.9rem] cursor-pointer flex justify-center gap-[6px] items-center transition-all duration-[0.2s] ease hover:border-[#558b2f] hover:shadow-[0_10px_24px_rgba(85,139,47,0.22)] hover:-translate-y-[1px]">
						<span className="text-[1.1rem]">💼</span> LinkedIn
					</button>
				</div>

				<div className="text-center text-[#5c4433] text-[0.9rem] mt-[6px]">
					Don&apos;t have an account?{" "}
					<button type="button" onClick={onToggleMode} className="border-none bg-transparent text-[#558b2f] font-[700] underline cursor-pointer px-[2px] hover:text-[#6aa84f]">
						Sign up
					</button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default Login;
