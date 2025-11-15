"use client";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchFieldForByNameSchema } from "@/lib/all-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";

const SearchFieldForByName = () => {
	const router = useRouter();

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(SearchFieldForByNameSchema),
		defaultValues: {
			mealName: "",
		},
		mode: "all",
	});

	const onSubmit = (data: { mealName: string }) => {
		console.log("data");
		console.log(data);
		router.push(`/recipebyname/${data.mealName}`);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="relative max-w-xl">
			<Controller
				name="mealName"
				control={control}
				render={({ field }) => (
					<Field>
						<Input
							{...field}
							placeholder="Enter a Meal Name here"
							className="rounded-full border-blue-600 px-6 py-6 focus-visible:border-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-blue-400"
						/>
					</Field>
				)}
			/>
			<Button
				type="submit"
				className="text-foreground absolute end-0 top-1/2 -translate-y-1/2 transform cursor-pointer bg-transparent hover:bg-transparent"
				variant={"default"}>
				<Search />
			</Button>
		</form>
	);
};

export default SearchFieldForByName;
