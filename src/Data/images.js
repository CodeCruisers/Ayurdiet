const imagesContext = require.context(
	"../Images/recipe",
	false,
	/\.(png|jpe?g|webp)$/,
);

export const recipeImages = imagesContext.keys().reduce((acc, path) => {
	const key = path.replace("./", "").split(".")[0]; // "1", "2", etc
	acc[key] = imagesContext(path);
	return acc;
}, {});
