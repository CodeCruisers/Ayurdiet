import React from "react";
const Button = ({
	children,
	variant = "primary",
	type = "button",
	disabled = false,
	loading = false,
	onClick,
	fullWidth = false,
}) => {
	const baseClasses = "inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-base font-semibold no-underline border-none transition-all duration-300 relative disabled:opacity-60 disabled:cursor-not-allowed";
	const variantClasses = {
		primary: "bg-gradient-to-br from-primary-green to-light-green text-white hover:not-disabled:-translate-y-[2px] hover:not-disabled:shadow-[0_8px_20px_rgba(45,90,39,0.3)]",
		secondary: "bg-primary-green !h-[6vh] text-white border-2 border-primary-green hover:not-disabled:bg-primary-green hover:not-disabled:text-white"
	};
	const widthClass = fullWidth ? "w-full" : "";
	const loadingClass = loading ? "pointer-events-none" : "";

	return (
		<button
			type={type}
			disabled={disabled || loading}
			onClick={onClick}
			className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${widthClass} ${loadingClass}`}
		>
			{loading && <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin"></div>}
			{children}
		</button>
	);
};

export default Button;
