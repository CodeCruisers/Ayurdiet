import React from "react";

export default function RecipeModal({ recipe, onClose }) {
	if (!recipe) return null;

	return (
		<div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[9999] p-4" onClick={onClose}>
			<div className="bg-[#222228] rounded-[16px] w-[80vw] max-w-[900px] h-[90vh] overflow-y-auto p-8 text-[#eee] relative shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col gap-8 [&::-webkit-scrollbar]:w-2" onClick={(e) => e.stopPropagation()}>
				<button className="absolute top-4 right-4 bg-transparent border-none text-[#eee] text-[1.5rem] cursor-pointer" onClick={onClose}>
					✕
				</button>

				<h2 className="m-0">{recipe.name}</h2>

				<div className="bg-[#44444b] p-px border-none rounded-[10px]"></div>

				<div
					className={`text-[0.7rem] h-fit w-fit py-1 px-3 rounded-full font-semibold mb-4 select-none whitespace-nowrap ${
						recipe.type === "Beverage"
							? "bg-[#3498db]/90 text-[#041c2d]"
							: recipe.veg
								? "bg-[#2ecc71]/90 text-[#0c3b22]"
								: "bg-[#e74c3c]/90 text-[#3a0b06]"
					}`}
				>
					{recipe.type || (recipe.veg ? "Veg" : "Non-Veg")}
				</div>

				<div className="flex flex-wrap gap-6">
					<img
						src={
							recipe.image ||
							"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
						}
						alt={recipe.name}
						className="w-[45%] max-w-[300px] object-cover rounded-xl"
					/>

					<div className="bg-[#1e1e25] p-4 rounded-xl flex-1">
						<h3 className="mb-2 text-[#f0f0f0] m-0">Nutrients</h3>
						<ul className="ml-4 mb-0">
							<li>Calories: {recipe.nutrients.calories ?? "--"}</li>
							<li>Protein: {recipe.nutrients.protein ?? "--"}g</li>
							<li>Carbs: {recipe.nutrients.carbs ?? "--"}g</li>
							<li>Fats: {recipe.nutrients.fats ?? "--"}g</li>
							<li>Fiber: {recipe.nutrients.fiber ?? "--"}g</li>
						</ul>
					</div>
				</div>

				{/* BOTTOM ROW: RECIPE + INGREDIENTS */}
				<div className="flex flex-wrap gap-6">
					<div className="bg-[#1e1e25] p-4 rounded-xl flex-1 min-w-[250px]">
						<h3 className="mb-2 text-[#f0f0f0] m-0">Recipe</h3>
						{recipe.recipe?.length ? (
							<ol className="ml-4 mb-0">
								{recipe.recipe.map((step, i) => (
									<li key={i}>{step}</li>
								))}
							</ol>
						) : (
							<p>No recipe steps available.</p>
						)}
					</div>

					<div className="bg-[#1e1e25] p-4 rounded-xl flex-1 min-w-[250px]">
						<h3 className="mb-2 text-[#f0f0f0] m-0">Ingredients</h3>
						{recipe.ingredients?.length ? (
							<ul className="ml-4 mb-0">
								{recipe.ingredients.map((ing, i) => (
									<li key={i}>{ing}</li>
								))}
							</ul>
						) : (
							<p>No ingredients listed.</p>
						)}
					</div>
				</div>
				<div className="mt-2 flex items-center justify-center flex-wrap gap-2">
					{recipe.tags?.length > 0 &&
						recipe.tags.map((tag, i) => (
							<span key={i} className="flex w-fit px-2.5 py-1 bg-[#55555f] text-[#eee] text-[0.75rem] rounded-full select-none transition-colors duration-200 hover:bg-[#777781]">
								{tag}
							</span>
						))}
				</div>
			</div>
		</div>
	);
}
