import "./Cookbook.css";
import RecipeGrid from "./RecipeGrid";
import { recipesWithImages } from "../../../../../Data/recipes";

const Cookbook = () => {
    return (
			<>
				<div className="cookbook-page">
					<div id="book-header">
						<div id="heading">
							<h1>Cookbook</h1>
							<p>
								Discover delicious and healthy recipes tailored for your
								well-being.
							</p>
						</div>
					</div>
			<div id="tag-search">
				<button className="item-tag">All</button>
				<button className="item-tag">Breakfast</button>
				<button className="item-tag">Lunch</button>
				<button className="item-tag">Dinner</button>
			</div>
			</div>
				<div id="book-body">
					<RecipeGrid recipes={recipesWithImages} />
				</div>
			</>
		);
};
export default Cookbook;
