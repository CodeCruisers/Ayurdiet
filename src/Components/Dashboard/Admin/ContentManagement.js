import React, { useState } from "react";

const ContentManagement = ({ content, className = "" }) => {
	const [activeTab, setActiveTab] = useState("recipes");

	const { pendingRecipes, pendingArticles, reportedContent, moderationQueue } =
		content;

	const tabs = [
		{ id: "recipes", label: "Recipes", count: pendingRecipes },
		{ id: "articles", label: "Articles", count: pendingArticles },
		{ id: "reported", label: "Reported", count: reportedContent },
		{ id: "queue", label: "Moderation Queue", count: moderationQueue },
	];

	const renderContent = () => {
		switch (activeTab) {
			case "recipes":
				return (
					<div className="flex flex-col gap-3">
						{[...Array(pendingRecipes)].map((_, index) => (
							<div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 p-4 border border-slate-200 rounded-xl bg-[#fafdf9] transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
								<div className="flex items-center gap-3 flex-1">
									<div className="w-[60px] h-[60px] bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-slate-200"></div>
									<div>
										<h4 className="m-0 mb-1 text-[0.95rem] font-semibold text-gray-800">Ayurvedic Detox Smoothie #{index + 1}</h4>
										<p className="m-0 mb-1 text-[0.85rem] text-gray-500">Submitted by User {index + 1}</p>
										<span className="text-xs text-gray-400">2 days ago</span>
									</div>
								</div>
								<div className="flex w-full md:w-auto justify-end gap-2">
									<button className="px-3 py-1.5 border-none rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-emerald-500 text-white hover:bg-emerald-600">Approve</button>
									<button className="px-3 py-1.5 border-none rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-red-500 text-white hover:bg-red-600">Reject</button>
									<button className="px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-transparent text-primary-green border border-primary-green hover:bg-emerald-50 hover:text-primary-green">Preview</button>
								</div>
							</div>
						))}
					</div>
				);

			case "articles":
				return (
					<div className="flex flex-col gap-3">
						{[...Array(pendingArticles)].map((_, index) => (
							<div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 p-4 border border-slate-200 rounded-xl bg-[#fafdf9] transition-all duration-300 hover:border-primary-green hover:bg-[#f0f9f0]">
								<div className="flex items-center gap-3 flex-1">
									<div>
										<h4 className="m-0 mb-1 text-[0.95rem] font-semibold text-gray-800">
											Understanding Dosha Balance in Modern Life #{index + 1}
										</h4>
										<p className="m-0 mb-1 text-[0.85rem] text-gray-500">By Dr. Ayurveda Expert</p>
										<span className="text-xs text-gray-400">1 day ago</span>
									</div>
								</div>
								<div className="flex w-full md:w-auto justify-end gap-2">
									<button className="px-3 py-1.5 border-none rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-emerald-500 text-white hover:bg-emerald-600">Approve</button>
									<button className="px-3 py-1.5 border-none rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-red-500 text-white hover:bg-red-600">Reject</button>
									<button className="px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all duration-300 bg-transparent text-primary-green border border-primary-green hover:bg-emerald-50 hover:text-primary-green">Preview</button>
								</div>
							</div>
						))}
					</div>
				);

			default:
				return (
					<div className="text-center py-10 px-5 text-slate-500">
						<div className="text-[3rem] mb-4 opacity-50">📝</div>
						<h4 className="m-0 mb-2 text-slate-700 text-[1.1rem]">No content pending</h4>
						<p className="m-0 text-sm">All content has been moderated and approved.</p>
					</div>
				);
		}
	};

	return (
		<div className={`bg-white ${className}`}>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-5 pb-4 border-b border-slate-200">
				<h3 className="m-0 text-primary-green text-[1.3rem] font-semibold">Content Management</h3>
				<div className="flex w-full md:w-auto justify-around md:justify-start gap-5">
					<div className="text-center">
						<span className="block text-[1.5rem] font-bold text-primary-green">
							{pendingRecipes + pendingArticles}
						</span>
						<span className="text-xs text-slate-500 uppercase tracking-wide">Pending Review</span>
					</div>
					<div className="text-center">
						<span className="block text-[1.5rem] font-bold text-primary-green">{reportedContent}</span>
						<span className="text-xs text-slate-500 uppercase tracking-wide">Reported</span>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap border-b border-slate-200 mb-5">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						className={`flex-1 md:flex-none min-w-[120px] md:min-w-0 text-center bg-transparent border-none px-5 py-3 text-sm font-medium text-slate-500 cursor-pointer relative transition-all duration-300 border-b-2 hover:text-primary-green hover:bg-slate-50 ${activeTab === tab.id ? "text-primary-green border-b-primary-green font-semibold" : "border-transparent"}`}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.label}
						{tab.count > 0 && <span className="bg-red-500 text-white rounded-[10px] px-1.5 py-0.5 text-[0.7rem] font-semibold ml-1.5">{tab.count}</span>}
					</button>
				))}
			</div>

			<div className="min-h-[200px] max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">{renderContent()}</div>

			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mt-5 pt-4 border-t border-slate-200">
				<button className="bg-transparent border-none text-primary-green text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-light-green">Content Guidelines</button>
				<button className="bg-primary-green text-white border-none py-2 px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-light-green">Bulk Actions</button>
			</div>
		</div>
	);
};

export default ContentManagement;
