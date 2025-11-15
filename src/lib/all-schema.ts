import z4 from "zod/v4";

export const SearchFieldForByNameSchema = z4.object({
	mealName: z4.string(),
});

export type SearchFieldForByNameSchemaType = z4.infer<
	typeof SearchFieldForByNameSchema
>;
