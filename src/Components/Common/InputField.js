import React from "react";

const InputField = ({
	label,
	type = "text",
	value,
	onChange,
	error,
	placeholder,
	required = false,
	icon,
}) => {
	return (
		<div className="mb-5">
			{label && (
				<label className="block mb-2 font-medium text-text-dark">
					{label}
					{required && <span className="text-[#e53e3e] ml-1">*</span>}
				</label>
			)}
			<div className="relative">
				{icon && <span className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[1.2rem] text-text-light">{icon}</span>}
				<input
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`w-full py-3 px-4 border-2 rounded-lg text-base transition-all duration-300 bg-white focus:outline-none ${error ? "border-[#e53e3e] focus:border-[#e53e3e] focus:shadow-[0_0_0_3px_rgba(229,62,62,0.1)]" : "border-[#e2e8f0] focus:border-primary-green focus:shadow-[0_0_0_3px_rgba(45,90,39,0.1)]"} ${
						icon ? "pl-[45px]" : ""
					}`}
				/>
			</div>
			{error && <span className="block text-[#e53e3e] text-sm mt-[5px]">{error}</span>}
		</div>
	);
};

export default InputField;
