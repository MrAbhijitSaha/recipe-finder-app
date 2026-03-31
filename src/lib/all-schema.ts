import z from "zod";

export const SearchFieldForByNameSchema = z.object({
	mealName: z
		.string()
		.min(2, { error: "Meal name must be more than 2 characters" }),
});
