import z4 from "zod/v4";

export const SearchForHomeHeroSchema = z4.object({
	mealName: z4.string(),
});

export type SearchForHomeHeroSchemaType = z4.infer<
	typeof SearchForHomeHeroSchema
>;
