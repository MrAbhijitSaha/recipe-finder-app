"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchFieldForByNameSchema } from "@/lib/all-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";

const SearchFieldForByName = (mealName: { mealName: string }) => {
	const router = useRouter();

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(SearchFieldForByNameSchema),
		defaultValues: {
			mealName: `${mealName.mealName || ""}`,
		},
		mode: "all",
	});

	const onSubmit = (data: { mealName: string }) => {
		router.push(`/recipebyname/${data.mealName}`);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex max-w-xl gap-2">
			<Controller
				name="mealName"
				control={control}
				render={({ field, fieldState }) => (
					<Field>
						<Input
							{...field}
							aria-invalid={fieldState.invalid}
							placeholder="Enter a Meal Name here"
							className="rounded-e-none py-7"
						/>

						{fieldState.invalid && (
							<FieldError errors={[fieldState.error]} />
						)}
					</Field>
				)}
			/>

			<Button
				type="submit"
				className="rounded-s-none py-7"
				variant={"outline"}
				disabled={isSubmitting}>
				<Search />
			</Button>
		</form>
	);
};

export default SearchFieldForByName;
