import { useState } from "react";
import { LuHeart, LuBookOpen } from "react-icons/lu";
import RecipeModal from "./RecipeModal";

const FALLBACK_IMG =
	"https://images.unsplash.com/photo-1546069901-ba9599a7e63c";

export default function RecipeCard({ recipe }) {
	const [isFavorite, setIsFavorite] = useState(recipe.favorite);
	const [showModal, setShowModal] = useState(false);

	// Use fallback image if recipe.image is falsy or empty string
	const imgSrc =
		recipe.image && recipe.image !== "" ? recipe.image : FALLBACK_IMG;

	return (
		<>
			<div className="flex flex-col relative bg-[#18181f] rounded-[18px] overflow-hidden cursor-pointer transition-all duration-[350ms] ease-out shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)] group">
				{/* HEART */}
				<button
					className={`absolute top-3 right-3 z-10 bg-black/60 border-none rounded-full w-9 h-9 flex items-center justify-center text-white cursor-pointer transition-all duration-200 hover:scale-110 ${isFavorite ? "bg-[#ff4d4d] text-white [&>svg]:fill-white" : ""}`}
					onClick={(e) => {
						e.stopPropagation();
						setIsFavorite(!isFavorite);
					}}
					aria-label="Toggle Favorite"
				>
					<LuHeart />
				</button>

				{/* IMAGE */}
				<div className="h-[180px] overflow-hidden relative">
					<img src={imgSrc} alt={recipe.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]" />

					<span
						className={`absolute top-3 left-3 px-2.5 py-1 text-[0.7rem] rounded-full font-semibold backdrop-blur-md select-none ${recipe.type === "Beverage" ? "bg-[#3498db]/90 text-[#041c2d]" : (recipe.veg ? "bg-[#2ecc71]/90 text-[#0c3b22]" : "bg-[#e74c3c]/90 text-[#3a0b06]")}`}
					>
						{recipe.type || (recipe.veg ? "Veg" : "Non-Veg")}
					</span>
				</div>

				{/* RECIPE BUTTON */}
				<button
					className="self-end mt-2.5 mx-4 mb-0 px-3.5 py-2 bg-white/95 border-none rounded-full text-[0.75rem] font-semibold cursor-pointer flex items-center gap-1.5 transition-transform duration-200 hover:scale-105"
					onClick={() => setShowModal(true)}
					aria-label="Open Recipe Details"
				>
					<LuBookOpen />
					Recipe
				</button>

				{/* CONTENT */}
				<div className="p-[1.2rem] flex flex-col flex-1">
					<h3 className="text-[1.1rem] mb-1.5 m-0">{recipe.name}</h3>

					<div className="text-[0.85rem] text-[#b5b5bd] mb-auto m-0">
						{recipe.nutrients?.protein && (
							<span>{recipe.nutrients.protein}g protein</span>
						)}
					</div>

					{/* STATS (PINNED BOTTOM) */}
					<div className="flex justify-between text-center mt-4 pt-3 border-t border-[#2a2a30]">
						<div>
							<small className="text-[#8b8b93] text-[0.75rem]">Calories</small>
							<p className="font-semibold mt-1 m-0">{recipe.nutrients.calories ?? "--"}</p>
						</div>
						<div>
							<small className="text-[#8b8b93] text-[0.75rem]">Prep</small>
							<p className="font-semibold mt-1 m-0">{recipe.prepTime} min</p>
						</div>
						<div>
							<small className="text-[#8b8b93] text-[0.75rem]">Cook</small>
							<p className="font-semibold mt-1 m-0">{recipe.cookTime} min</p>
						</div>
					</div>
				</div>
			</div>

			{/* MODAL */}
			{showModal && (
				<RecipeModal recipe={recipe} onClose={() => setShowModal(false)} />
			)}
		</>
	);
}
