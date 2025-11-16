import ky from "ky";
import { Root } from "./alltypes";
import { env } from "./env";

export const fetchRecipeByLetter = async (letter: string | undefined) => {
	const { meals } = await ky
		.get(`${env.RECIPE_API}/search.php`, {
			searchParams: {
				f: letter ?? "",
			},
			timeout: 5000,
		})
		.json<Root>();
	console.log(meals);

	return meals;
};

export const fetchRecipeByName = async (name: string | undefined) => {
	const { meals } = await ky
		.get(`${env.RECIPE_API}/search.php`, {
			searchParams: {
				s: name ?? "",
			},
			timeout: 5000,
		})
		.json<Root>();

	console.log(meals);

	return meals;
};
