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
	try {
		const { meals } = await ky
			.get(`${env.RECIPE_API}/search.php`, {
				searchParams: {
					s: name ?? "",
				},
				timeout: 5000,
			})
			.json<Root>();

		return {
			isSuccess: true,
			message: "",
			data: meals,
		};
	} catch (err) {
		console.error(err);

		return {
			isSuccess: false,
			message: "Sorry, we couldn't load meals. Please try again.",
			data: null,
		};
	}
};

export const fetchARandomMeal = async () => {
	try {
		const { meals } = await ky
			.get(`${env.RECIPE_API}/random.php`, {
				timeout: 5000,
			})
			.json<Root>();

		console.log("your random meal : ", meals);

		return {
			isSuccess: true,
			message: " ",
			data: meals,
		};
	} catch (err) {
		console.error(err);
		return {
			isSuccess: false,
			message: "Oops! Something went wrong.",
			data: null,
		};
	}
};
