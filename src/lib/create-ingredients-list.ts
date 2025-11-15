import { Ingredient, Meal } from "./alltypes";

export const getIngredients = (data: Meal): Ingredient[] => {
	const ingredients: Ingredient[] = [];

	for (let i = 1; i <= 20; i++) {
		const ingKey = `strIngredient${i}` as keyof Meal;
		const mesKey = `strMeasure${i}` as keyof Meal;

		const ingredient = data[ingKey] as string | null;
		const measure = data[mesKey] as string | null;

		if (!ingredient || ingredient.trim() === "") {
			break;
		}

		ingredients.push({
			ingredient: ingredient,
			measure: measure || "",
		});
	}
	return ingredients;
};
