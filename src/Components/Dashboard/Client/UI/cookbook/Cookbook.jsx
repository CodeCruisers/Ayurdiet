import RecipeGrid from "./RecipeGrid";
import { recipesWithImages } from "../../../../../Data/recipes";

const Cookbook = () => {
    return (
			<>
				<div className="px-8 pb-6 max-[600px]:px-5">
					<div className="max-w-[1200px] mx-auto mb-10 flex justify-between items-end gap-8 flex-wrap max-[768px]:flex-col max-[768px]:items-start">
						<div>
							<h1 className="text-[2.8rem] max-[768px]:text-[2.2rem] font-bold tracking-[-0.4px] m-0">Cookbook</h1>
							<p className="mt-2 max-w-[520px] text-[#9a9aa0] leading-[1.55] m-0">
								Discover delicious and healthy recipes tailored for your
								well-being.
							</p>
						</div>
					</div>
			<div className="flex gap-2 mb-6 max-w-[1200px] mx-auto">
				<button className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.85rem] hover:bg-white/10 transition-colors">All</button>
				<button className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.85rem] hover:bg-white/10 transition-colors">Breakfast</button>
				<button className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.85rem] hover:bg-white/10 transition-colors">Lunch</button>
				<button className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[0.85rem] hover:bg-white/10 transition-colors">Dinner</button>
			</div>
			</div>
				<div className="max-w-[1200px] mx-auto pb-12 animate-[fadeIn_0.5s_ease_forwards]">
					<RecipeGrid recipes={recipesWithImages} />
				</div>
			</>
		);
};
export default Cookbook;
