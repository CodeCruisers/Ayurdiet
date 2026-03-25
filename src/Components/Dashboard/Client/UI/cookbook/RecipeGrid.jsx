import RecipeCard from "./RecipeCard";

/**
 * Displays a grid of recipe cards.
 * @param {Array} recipes - Array of recipe objects
 */
export default function RecipeGrid({ recipes = [] }) {
	if (recipes.length === 0) {
		return <p className="">No recipes found.</p>;
	}

	return (
		<section className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</section>
	);
}
