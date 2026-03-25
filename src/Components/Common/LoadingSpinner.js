import React from "react";

const getSpinnerSize = (size) => ({
	small: "w-5 h-5 border-2",
	medium: "w-8 h-8 md:w-[28px] md:h-[28px] border-[3px]",
	large: "w-12 h-12 md:w-[40px] md:h-[40px] border-4",
	xlarge: "w-16 h-16 border-[5px]",
}[size] || "w-8 h-8 border-[3px]");

const getSpinnerColor = (variant) => ({
	primary: "border-[#e8f5e8] border-t-primary-green contrast-more:border-t-black",
	secondary: "border-slate-100 border-t-slate-500",
	accent: "border-[#fef7cd] border-t-gold",
	success: "border-emerald-100 border-t-emerald-600",
	warning: "border-amber-100 border-t-amber-600",
	error: "border-red-100 border-t-red-600",
}[variant] || "border-[#e8f5e8] border-t-primary-green");

const LoadingSpinner = ({
	size = "medium",
	variant = "primary",
	text = "Loading...",
	overlay = false,
	fullScreen = false,
}) => {
	const spinnerClass = `rounded-full animate-spin motion-reduce:animate-none motion-reduce:border-t-transparent ${getSpinnerSize(size)} ${getSpinnerColor(variant)}`;
	const textElement = text ? <p className="text-slate-500 text-[0.9rem] md:text-[0.8rem] m-0 text-center dark:text-slate-400">{text}</p> : null;

	if (fullScreen) {
		return (
			<div className="fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center gap-5 z-[9999]">
				<div className={spinnerClass}></div>
				{textElement}
			</div>
		);
	}

	if (overlay) {
		return (
			<div className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 flex flex-col items-center justify-center gap-4 z-[1000] backdrop-blur-[4px]">
				<div className={spinnerClass}></div>
				{textElement}
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center gap-[12px]">
			<div className={spinnerClass}></div>
			{textElement}
		</div>
	);
};

// Additional Spinner Variants
const getCircleSize = (size) => ({ small: "w-6 h-6", medium: "w-9 h-9", large: "w-[52px] h-[52px]" }[size] || "w-9 h-9");
const getCircleColor = (variant) => ({
	primary: "bg-[radial-gradient(circle,#2d5a27_30%,transparent_70%)] shadow-[0_0_20px_rgba(45,90,39,0.3)] contrast-more:bg-black",
	secondary: "bg-[radial-gradient(circle,#64748b_30%,transparent_70%)] shadow-[0_0_20px_rgba(100,116,139,0.3)]",
	accent: "bg-[radial-gradient(circle,#d4af37_30%,transparent_70%)] shadow-[0_0_20px_rgba(212,175,55,0.3)]",
}[variant] || "bg-[radial-gradient(circle,#2d5a27_30%,transparent_70%)] shadow-[0_0_20px_rgba(45,90,39,0.3)]");

export const CircleSpinner = ({ size = "medium", variant = "primary" }) => (
	<div className={`rounded-full animate-circle-pulse motion-reduce:animate-none ${getCircleSize(size)} ${getCircleColor(variant)}`}></div>
);

const getDotsColor = (variant) => ({ primary: "bg-primary-green contrast-more:bg-black", secondary: "bg-slate-500", accent: "bg-gold" }[variant] || "bg-primary-green");
const getDotsSize = (size) => ({ small: "w-1.5 h-1.5", medium: "w-2 h-2", large: "w-3 h-3" }[size] || "w-2 h-2");
const getDotsGap = (size) => ({ small: "gap-[3px]", medium: "gap-1", large: "gap-[6px]" }[size] || "gap-1");

export const DotsSpinner = ({ size = "medium", variant = "primary" }) => {
	const dotClass = `rounded-full animate-dots-bounce motion-reduce:animate-none motion-reduce:opacity-60 ${getDotsSize(size)} ${getDotsColor(variant)}`;
	return (
		<div className={`flex items-center justify-center ${getDotsGap(size)}`}>
			<div className={`${dotClass} [animation-delay:-0.32s]`}></div>
			<div className={`${dotClass} [animation-delay:-0.16s]`}></div>
			<div className={`${dotClass} [animation-delay:0s]`}></div>
		</div>
	);
};

export const PulseSpinner = ({ size = "medium", variant = "primary" }) => {
	const bg = { primary: "bg-primary-green contrast-more:bg-black", secondary: "bg-slate-500", accent: "bg-gold" }[variant] || "bg-primary-green";
	return <div className={`rounded-full animate-pulse-custom motion-reduce:animate-none ${getCircleSize(size)} ${bg}`}></div>;
};

const getBounceGap = (size) => ({ small: "gap-[2px]", medium: "gap-[3px]", large: "gap-1" }[size] || "gap-[3px]");
const getBounceSize = (size) => ({ small: "w-1.5 h-1.5", medium: "w-2 h-2", large: "w-2.5 h-2.5" }[size] || "w-2 h-2");

export const BounceSpinner = ({ size = "medium", variant = "primary" }) => {
	const bounceClass = `rounded-full animate-bounce-custom motion-reduce:animate-none motion-reduce:opacity-60 ${getBounceSize(size)} ${getDotsColor(variant)}`;
	return (
		<div className={`flex items-center justify-center ${getBounceGap(size)}`}>
			<div className={`${bounceClass} [animation-delay:-0.32s]`}></div>
			<div className={`${bounceClass} [animation-delay:-0.16s]`}></div>
			<div className={`${bounceClass} [animation-delay:0s]`}></div>
		</div>
	);
};

const getWaveSize = (size) => ({ small: "w-[3px] h-[12px]", medium: "w-1 h-[18px]", large: "w-[5px] h-[24px]" }[size] || "w-1 h-[18px]");

export const WaveSpinner = ({ size = "medium", variant = "primary" }) => {
	const barClass = `animate-wave motion-reduce:animate-none ${getWaveSize(size)} ${getDotsColor(variant)}`;
	return (
		<div className={`flex items-center justify-center gap-[3px]`}>
			<div className={`${barClass} [animation-delay:-1.2s]`}></div>
			<div className={`${barClass} [animation-delay:-1.1s]`}></div>
			<div className={`${barClass} [animation-delay:-1.0s]`}></div>
			<div className={`${barClass} [animation-delay:-0.9s]`}></div>
			<div className={`${barClass} [animation-delay:-0.8s]`}></div>
		</div>
	);
};

export default LoadingSpinner;
