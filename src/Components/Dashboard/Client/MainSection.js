import React from "react";
import Dashboard from "./UI/Dashboard";

// Optional stubs if they need rendering
const PlaceholderView = ({ title }) => (
	<div className="flex flex-col items-center justify-center h-[60vh] text-[#6b7280]">
		<div className="text-[4rem] mb-[16px] opacity-50 text-[#cbd5e1]">🚧</div>
		<h2 className="text-[1.5rem] font-bold text-[#1f2937] mb-[8px]">{title}</h2>
		<p>This module is currently under construction.</p>
	</div>
);

const MainSection = ({ activeView, setActiveView }) => {
	return (
		<div className="flex flex-col flex-1 h-screen overflow-hidden bg-[#f8faf8]">
			{/* Top Navigation Bar */}
			<div className="h-[80px] min-h-[80px] bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[30px] z-10 shadow-[0_2px_10px_rgba(0,0,0,0.01)] shrink-0">
				<h1 className="text-[1.3rem] font-[800] text-[#111827] m-0 tracking-tight">My Health Dashboard</h1>
				
				<div className="flex items-center gap-[24px]">
					<div className="relative flex items-center max-[768px]:hidden">
						<span className="absolute left-[14px] text-[#9ca3af] text-[0.9rem] bg-transparent border-none z-10 pointer-events-none">🔍</span>
						<input 
							type="text" 
							placeholder="Search meals, nutrients..." 
							className="pl-[38px] pr-[16px] py-[10px] bg-[#f8fafc] border border-[#e2e8f0] rounded-full text-[0.9rem] font-medium w-[280px] transition-all focus:outline-none focus:border-[#6DBE45] focus:bg-white focus:ring-2 focus:ring-[rgba(109,190,69,0.2)] placeholder:text-[#9ca3af]"
						/>
					</div>
					
					<div className="flex items-center gap-[12px]">
						<button className="relative w-[42px] h-[42px] rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center cursor-pointer text-[1.1rem] hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all focus:outline-none">
							🔔
							<span className="absolute top-[8px] right-[8px] w-[10px] h-[10px] bg-[#ef4444] rounded-full border-2 border-white"></span>
						</button>
						<button className="relative w-[42px] h-[42px] rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center cursor-pointer text-[1.1rem] hover:bg-[#f8fafc] hover:border-[#cbd5e1] transition-all focus:outline-none">
							⏳
						</button>
						<div className="w-[46px] h-[46px] rounded-full bg-[#dcfce7] border-[3px] border-white shadow-sm flex items-center justify-center text-[1.2rem] font-bold text-[#166534] ml-[8px] cursor-pointer hover:scale-[1.05] transition-transform">
							<img src="https://ui-avatars.com/api/?name=Client+User&background=6DBE45&color=fff&bold=true" alt="User Avatar" className="w-full h-full rounded-full object-cover" />
						</div>
					</div>
				</div>
			</div>

			{/* Main Scrollable View */}
			<div className="flex-1 overflow-y-auto p-[30px] max-[768px]:px-[15px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-[#cbd5e1] [&::-webkit-scrollbar-thumb]:rounded-full">
				<div className="w-full max-w-[1400px] mx-auto min-h-full">
					{(() => {
						switch (activeView) {
							case "dashboard":
								return <Dashboard />;
							default:
								return <PlaceholderView title={activeView.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} />;
						}
					})()}
				</div>
			</div>
		</div>
	);
};

export default MainSection;
