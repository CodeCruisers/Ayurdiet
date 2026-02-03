import React from "react";
import "./RecipeModal.css";

export default function RecipeModal({ recipe, onClose }) {
	if (!recipe) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close-btn" onClick={onClose}>
					✕
				</button>

				<h2>{recipe.name}</h2>

				<div className="line"></div>

				<div
					className={`modal-type-badge ${
						recipe.type === "Beverage"
							? "beverage"
							: recipe.veg
								? "veg"
								: "nonveg"
					}`}
				>
					{recipe.type || (recipe.veg ? "Veg" : "Non-Veg")}
				</div>

				<div className="modal-top-row">
					<img
						src={
							recipe.image ||
							"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
						}
						alt={recipe.name}
						className="modal-image"
					/>

					<div className="modal-nutrients card">
						<h3>Nutrients</h3>
						<ul>
							<li>Calories: {recipe.nutrients.calories ?? "--"}</li>
							<li>Protein: {recipe.nutrients.protein ?? "--"}g</li>
							<li>Carbs: {recipe.nutrients.carbs ?? "--"}g</li>
							<li>Fats: {recipe.nutrients.fats ?? "--"}g</li>
							<li>Fiber: {recipe.nutrients.fiber ?? "--"}g</li>
						</ul>
					</div>
				</div>

				{/* BOTTOM ROW: RECIPE + INGREDIENTS */}
				<div className="modal-bottom-row">
					<div className="modal-recipe card">
						<h3>Recipe</h3>
						{recipe.recipe?.length ? (
							<ol>
								{recipe.recipe.map((step, i) => (
									<li key={i}>{step}</li>
								))}
							</ol>
						) : (
							<p>No recipe steps available.</p>
						)}
					</div>

					<div className="modal-ingredients card">
						<h3>Ingredients</h3>
						{recipe.ingredients?.length ? (
							<ul>
								{recipe.ingredients.map((ing, i) => (
									<li key={i}>{ing}</li>
								))}
							</ul>
						) : (
							<p>No ingredients listed.</p>
						)}
					</div>
				</div>
				<div className="modal-tags">
					{recipe.tags?.length > 0 &&
						recipe.tags.map((tag, i) => (
							<span key={i} className="tag-badge">
								{tag}
							</span>
						))}
				</div>
			</div>
		</div>
	);
}
