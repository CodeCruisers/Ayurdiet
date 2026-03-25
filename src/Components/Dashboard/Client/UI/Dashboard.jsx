import React, { useState } from "react";
import {
	AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
	XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const trendData = [
	{ name: "Jan", calories: 1800, recommended: 2000, vata: 40, pitta: 60 },
	{ name: "Feb", calories: 1950, recommended: 2000, vata: 45, pitta: 55 },
	{ name: "Mar", calories: 1600, recommended: 2000, vata: 50, pitta: 40 },
	{ name: "Apr", calories: 2100, recommended: 2000, vata: 35, pitta: 65 },
	{ name: "May", calories: 1900, recommended: 2000, vata: 40, pitta: 50 },
	{ name: "Jun", calories: 2050, recommended: 2000, vata: 30, pitta: 70 },
];

const nutrientData = [
	{ name: "Protein", consumed: 55, target: 70 },
	{ name: "Carbs", consumed: 210, target: 250 },
	{ name: "Fats", consumed: 65, target: 60 },
	{ name: "Fiber", consumed: 25, target: 30 },
];

const adherenceData = [
	{ name: "Adherence", value: 81 },
	{ name: "Remaining", value: 19 },
];
const GAUGE_COLORS = ["#6DBE45", "#f1f5f9"];

const SummaryCard = ({ title, value, unit, icon, color, progress }) => (
	<div className="bg-white rounded-[20px] p-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#e2e8f0] flex flex-col justify-between h-[150px] hover:-translate-y-[2px] transition-transform">
		<div className="flex justify-between items-start mb-[10px]">
			<div className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[1.4rem]" style={{ backgroundColor: `${color}15`, color: color }}>
				{icon}
			</div>
			{/* SVG Progress Circle */}
			<div className="relative w-[44px] h-[44px]">
				<svg className="w-full h-full transform -rotate-90">
					<circle cx="22" cy="22" r="18" stroke="#f1f5f9" strokeWidth="5" fill="none" />
					<circle 
						cx="22" cy="22" r="18" stroke={color} strokeWidth="5" fill="none" 
						strokeDasharray={18 * 2 * Math.PI} 
						strokeDashoffset={18 * 2 * Math.PI * (1 - progress / 100)} 
						strokeLinecap="round" 
					/>
				</svg>
			</div>
		</div>
		<div>
			<h3 className="text-[1.5rem] font-bold text-[#111827] m-0 leading-tight">
				{value} <span className="text-[0.85rem] font-semibold text-[#6b7280]">{unit}</span>
			</h3>
			<p className="text-[0.85rem] font-medium text-[#6b7280] m-0 mt-[2px]">{title}</p>
		</div>
	</div>
);

const Dashboard = () => {
	const [trendRange, setTrendRange] = useState("Monthly");
	
	return (
		<div className="w-full pb-[40px] animate-[fadeIn_0.4s_ease-out]">
			
			{/* AI Insight Bar */}
			<div className="bg-[#f0f9ed] border border-[#bbf7d0] rounded-[14px] p-[16px] mb-[24px] flex items-center gap-[16px] shadow-sm">
				<div className="w-[36px] h-[36px] rounded-full bg-[#6DBE45] text-white flex items-center justify-center text-[1.2rem] shrink-0">✨</div>
				<div>
					<h4 className="m-0 text-[#166534] text-[0.95rem] font-bold">Ayurvedic Insight: Pitta Elevated</h4>
					<p className="m-0 text-[#15803d] text-[0.85rem] mt-[4px]">Your Pitta is slightly elevated today. Prefer cooling foods like cucumber, coconut, and melons. You skipped lunch; consider a light Vata-balancing snack.</p>
				</div>
			</div>

			{/* 1. Summary Cards Row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px] mb-[24px]">
				<SummaryCard title="Calories Consumed" value="1450" unit="/ 2000" icon="🔥" color="#ef4444" progress={72} />
				<SummaryCard title="Dosha Balance" value="V:30 P:50" unit="" icon="⚖️" color="#f59e0b" progress={65} />
				<SummaryCard title="Diet Adherence" value="78" unit="%" icon="🎯" color="#6DBE45" progress={78} />
				<SummaryCard title="Water Intake" value="6" unit="/ 8 gls" icon="💧" color="#0ea5e9" progress={75} />
				<SummaryCard title="Sleep Quality" value="7.5" unit="hrs" icon="🌙" color="#8b5cf6" progress={90} />
			</div>

			{/* 2. Main Analytics & Right Panel Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[24px]">
				
				{/* Left: Charts (2 Columns wide) */}
				<div className="lg:col-span-2 flex flex-col gap-[24px]">
					
					{/* Trend Line Chart */}
					<div className="bg-white border border-[#e2e8f0] rounded-[20px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
						<div className="flex justify-between items-center mb-[20px]">
							<h3 className="text-[1.1rem] font-bold text-[#111827] m-0">Health & Nutrition Trends</h3>
							<select 
								value={trendRange}
								onChange={(e) => setTrendRange(e.target.value)}
								className="bg-[#f8fafc] border border-[#e2e8f0] text-[#4b5563] text-[0.85rem] font-medium py-[6px] px-[12px] rounded-[8px] outline-none focus:border-[#6DBE45]"
							>
								<option>Weekly</option>
								<option>Monthly</option>
							</select>
						</div>
						<div className="h-[280px]">
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={trendRange === "Monthly" ? trendData : trendData.slice(2, 6)}>
									<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
									<XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
									<YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dx={-10} />
									<Tooltip 
										contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
										itemStyle={{ fontSize: '0.9rem', fontWeight: 600 }}
									/>
									<Legend iconType="circle" wrapperStyle={{ fontSize: '0.85rem', paddingTop: '10px' }} />
									<Line type="monotone" dataKey="calories" name="Consumed Calories" stroke="#6DBE45" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
									<Line type="monotone" dataKey="recommended" name="Recommended" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
									<Line type="monotone" dataKey="pitta" name="Pitta Level" stroke="#f59e0b" strokeWidth={2} dot={{r: 3}} />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>

					{/* Nutrient Bar Chart */}
					<div className="bg-white border border-[#e2e8f0] rounded-[20px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
						<div className="flex justify-between items-center mb-[20px]">
							<h3 className="text-[1.1rem] font-bold text-[#111827] m-0">Daily Nutrient Breakdown</h3>
							<div className="bg-[#f1f5f9] rounded-full p-[4px] flex text-[0.8rem] font-medium text-[#64748b]">
								<button className="bg-white text-[#111827] px-[12px] py-[4px] rounded-full border-none shadow-sm font-semibold">Daily</button>
								<button className="bg-transparent text-[#64748b] px-[12px] py-[4px] rounded-full border-none hover:text-[#111827] cursor-pointer">Weekly</button>
							</div>
						</div>
						<div className="h-[240px]">
							<ResponsiveContainer width="100%" height="100%">
								<BarChart data={nutrientData} barSize={24} margin={{top: 10, right: 10, left: -20, bottom: 0}}>
									<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
									<XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
									<YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
									<Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
									<Legend iconType="circle" wrapperStyle={{ fontSize: '0.85rem', paddingTop: '10px' }} />
									<Bar dataKey="consumed" name="Consumed" fill="#6DBE45" radius={[6, 6, 6, 6]} />
									<Bar dataKey="target" name="Target" fill="#e2e8f0" radius={[6, 6, 6, 6]} />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>

				</div>

				{/* Right: Progress Gauge & Daily Meals (1 Column wide) */}
				<div className="flex flex-col gap-[24px]">
					
					{/* Progress Gauge */}
					<div className="bg-white border border-[#e2e8f0] rounded-[20px] p-[30px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
						<h3 className="text-[1.1rem] font-bold text-[#111827] m-0 w-full text-left mb-[10px]">Diet Adherence</h3>
						<div className="h-[180px] w-full relative flex items-center justify-center">
							<ResponsiveContainer width="100%" height="100%">
								<PieChart>
									<Pie
										data={adherenceData}
										cx="50%"
										cy="50%"
										innerRadius={60}
										outerRadius={80}
										startAngle={180}
										endAngle={0}
										dataKey="value"
										stroke="none"
										cornerRadius={40}
									>
										{adherenceData.map((entry, index) => (
											<Cell key={`cell-${index}`} fill={GAUGE_COLORS[index % GAUGE_COLORS.length]} />
										))}
									</Pie>
								</PieChart>
							</ResponsiveContainer>
							<div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<h2 className="text-[2.5rem] font-bold text-[#111827] m-0 leading-none">81<span className="text-[1rem] text-[#6b7280]">%</span></h2>
							</div>
						</div>
						<p className="text-[0.85rem] text-[#6b7280] m-0 mb-[20px] px-[10px]">You're doing great! Try to adhere to the Pitta-balancing dinner to hit your 90% goal.</p>
						<button className="w-full py-[12px] bg-white border border-[#cbd5e1] text-[#334155] font-bold rounded-[12px] cursor-pointer hover:bg-[#f8fafc] hover:border-[#94a3b8] transition-all">
							Set Target
						</button>
					</div>

					{/* Meals Eaten Today */}
					<div className="bg-white border border-[#e2e8f0] rounded-[20px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex-1">
						<div className="flex justify-between items-center mb-[20px]">
							<h3 className="text-[1.1rem] font-bold text-[#111827] m-0">Meals Eaten Today</h3>
						</div>
						
						<div className="flex flex-col gap-[14px]">
							{/* Breakfast card */}
							<div className="bg-[#f8fafc] border border-[#e2e8f0] p-[16px] rounded-[16px] flex items-center justify-between">
								<div className="flex items-center gap-[14px]">
									<div className="w-[46px] h-[46px] rounded-[12px] bg-[#dcfce7] text-[1.5rem] flex items-center justify-center">🥣</div>
									<div>
										<strong className="block text-[0.95rem] text-[#111827] mb-[2px]">Herbal Oats Porridge</strong>
										<span className="text-[0.75rem] font-semibold text-[#64748b]">Breakfast • 8:30 AM</span>
									</div>
								</div>
								<span className="bg-[#dcfce7] text-[#166534] text-[0.7rem] px-[8px] py-[4px] rounded-full font-bold uppercase tracking-wider">Done</span>
							</div>

							{/* Lunch card */}
							<div className="bg-[#fff1f2] border border-[#ffe4e6] p-[16px] rounded-[16px] flex items-center justify-between">
								<div className="flex items-center gap-[14px]">
									<div className="w-[46px] h-[46px] rounded-[12px] bg-white/[0.6] text-[1.5rem] flex items-center justify-center">🍛</div>
									<div>
										<strong className="block text-[0.95rem] text-[#111827] mb-[2px]">Ayurvedic Detox Khichdi</strong>
										<span className="text-[0.75rem] font-semibold text-[#64748b]">Lunch • 1:00 PM</span>
									</div>
								</div>
								<span className="bg-[#ffe4e6] text-[#be123c] text-[0.7rem] px-[8px] py-[4px] rounded-full font-bold uppercase tracking-wider">Skipped</span>
							</div>

							{/* Dinner card */}
							<div className="bg-[#fffbeb] border border-[#fef3c7] p-[16px] rounded-[16px] flex items-center justify-between">
								<div className="flex items-center gap-[14px]">
									<div className="w-[46px] h-[46px] rounded-[12px] bg-white/[0.6] text-[1.5rem] flex items-center justify-center">🍲</div>
									<div>
										<strong className="block text-[0.95rem] text-[#111827] mb-[2px]">Moong Dal Soup</strong>
										<span className="text-[0.75rem] font-semibold text-[#64748b]">Dinner • 7:30 PM</span>
									</div>
								</div>
								<span className="bg-[#fef3c7] text-[#b45309] text-[0.7rem] px-[8px] py-[4px] rounded-full font-bold uppercase tracking-wider">Pending</span>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/* 3. Upcoming Meals (Horizontal Scroll) */}
			<div className="bg-white border border-[#e2e8f0] rounded-[20px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
				<div className="flex justify-between items-center mb-[20px]">
					<h3 className="text-[1.1rem] font-bold text-[#111827] m-0">Upcoming Meals</h3>
					<div className="flex gap-[20px] text-[0.9rem] font-medium border-b border-[#e2e8f0] max-[480px]:hidden">
						<span className="text-[#6DBE45] border-b-2 border-[#6DBE45] pb-[6px] cursor-pointer">Breakfast</span>
						<span className="text-[#64748b] hover:text-[#111827] pb-[6px] cursor-pointer">Lunch</span>
						<span className="text-[#64748b] hover:text-[#111827] pb-[6px] cursor-pointer">Dinner</span>
					</div>
					<button className="bg-[#f1f5f9] text-[#334155] border-none px-[16px] py-[8px] rounded-[8px] text-[0.8rem] font-bold cursor-pointer hover:bg-[#e2e8f0]">
						View Full Diet Plan
					</button>
				</div>
				
				<div className="flex gap-[20px] overflow-x-auto pb-[10px] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:bg-[#cbd5e1] [&::-webkit-scrollbar-thumb]:rounded-full pt-[4px] px-[4px]">
					{/* Meal Horizontal Card 1 */}
					<div className="min-w-[280px] border border-[#e2e8f0] rounded-[16px] p-[16px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all cursor-pointer bg-white">
						<div className="flex justify-between items-start mb-[12px]">
							<span className="bg-[#e0f2fe] text-[#0369a1] text-[0.7rem] font-bold px-[8px] py-[4px] rounded-[6px]">8:00 AM</span>
							<span className="bg-[#fbf5dc] border border-[#f59e0b] text-[#b45309] text-[0.65rem] font-bold px-[6px] py-[2px] rounded-[4px]">Pitta Balancing</span>
						</div>
						<h4 className="text-[1rem] font-bold text-[#111827] m-0 mb-[6px]">Spiced Almond Milk</h4>
						<p className="text-[0.85rem] text-[#64748b] m-0 line-clamp-2 leading-[1.4]">Warm almond milk with cardamom and a pinch of saffron to soothe the digestive tract.</p>
					</div>

					{/* Meal Horizontal Card 2 */}
					<div className="min-w-[280px] border border-[#e2e8f0] rounded-[16px] p-[16px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all cursor-pointer bg-white">
						<div className="flex justify-between items-start mb-[12px]">
							<span className="bg-[#e0f2fe] text-[#0369a1] text-[0.7rem] font-bold px-[8px] py-[4px] rounded-[6px]">11:00 AM</span>
							<span className="bg-[#f0f9ed] border border-[#6DBE45] text-[#166534] text-[0.65rem] font-bold px-[6px] py-[2px] rounded-[4px]">Kapha Pacifying</span>
						</div>
						<h4 className="text-[1rem] font-bold text-[#111827] m-0 mb-[6px]">Fresh Fruit Bowl</h4>
						<p className="text-[0.85rem] text-[#64748b] m-0 line-clamp-2 leading-[1.4]">A mix of apples, berries, and a sprinkle of cinnamon.</p>
					</div>

					{/* Meal Horizontal Card 3 */}
					<div className="min-w-[280px] border border-[#e2e8f0] rounded-[16px] p-[16px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all cursor-pointer bg-white">
						<div className="flex justify-between items-start mb-[12px]">
							<span className="bg-[#e0f2fe] text-[#0369a1] text-[0.7rem] font-bold px-[8px] py-[4px] rounded-[6px]">1:30 PM</span>
							<span className="bg-[#fef2f2] border border-[#f87171] text-[#b91c1c] text-[0.65rem] font-bold px-[6px] py-[2px] rounded-[4px]">Vata Nourishing</span>
						</div>
						<h4 className="text-[1rem] font-bold text-[#111827] m-0 mb-[6px]">Root Veggie Stew</h4>
						<p className="text-[0.85rem] text-[#64748b] m-0 line-clamp-2 leading-[1.4]">Sweet potatoes, carrots, and ginger cooked softly in ghee.</p>
					</div>
					
				</div>
			</div>

		</div>
	);
};

export default Dashboard;
