import { useState } from "react";
import { LuHeart, LuBookOpen } from "react-icons/lu";
import RecipeModal from "./RecipeModal";

import "./Card.css";

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
			<div className="recipe-card">
				{/* HEART */}
				<button
					className={`heart-btn ${isFavorite ? "active" : ""}`}
					onClick={(e) => {
						e.stopPropagation();
						setIsFavorite(!isFavorite);
					}}
					aria-label="Toggle Favorite"
				>
					<LuHeart />
				</button>

				{/* IMAGE */}
				<div className="image-wrapper">
					<img src={imgSrc} alt={recipe.name} loading="lazy" />

					<span
						className={`badge ${recipe.type || (recipe.veg ? "veg" : "nonveg")}`}
					>
						{recipe.type || (recipe.veg ? "Veg" : "Non-Veg")}
					</span>
				</div>

				{/* RECIPE BUTTON */}
				<button
					className="recipe-side-btn"
					onClick={() => setShowModal(true)}
					aria-label="Open Recipe Details"
				>
					<LuBookOpen />
					Recipe
				</button>

				{/* CONTENT */}
				<div className="card-content">
					<h3>{recipe.name}</h3>

					<div className="meta">
						{recipe.nutrients?.protein && (
							<span>{recipe.nutrients.protein}g protein</span>
						)}
					</div>

					{/* STATS (PINNED BOTTOM) */}
					<div className="stats">
						<div>
							<small>Calories</small>
							<p>{recipe.nutrients.calories ?? "--"}</p>
						</div>
						<div>
							<small>Prep</small>
							<p>{recipe.prepTime} min</p>
						</div>
						<div>
							<small>Cook</small>
							<p>{recipe.cookTime} min</p>
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
