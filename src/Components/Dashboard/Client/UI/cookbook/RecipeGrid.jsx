import RecipeCard from "./RecipeCard";
import "./Cookbook.css";

/**
 * Displays a grid of recipe cards.
 * @param {Array} recipes - Array of recipe objects
 */
export default function RecipeGrid({ recipes = [] }) {
	if (recipes.length === 0) {
		return <p className="no-recipes">No recipes found.</p>;
	}

	return (
		<section className="recipe-grid">
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</section>
	);
}
