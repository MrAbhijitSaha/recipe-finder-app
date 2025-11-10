"use client"
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchForHomeHeroSchema } from "@/lib/all-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";

const SearchForHomeHero = () => {
	const router = useRouter();

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(SearchForHomeHeroSchema),
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
			className="relative max-w-xl ">
			<Controller
				name="mealName"
				control={control}
				render={({ field }) => (
					<Field>
						<Input
							{...field}
							placeholder="Enter a Meal Name here"
							className="py-6 rounded-full px-6  dark:border-blue-400 border-blue-600 focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-blue-600"
						/>
					</Field>
				)}
			/>
			<Button
				type="submit"
				className="absolute top-1/2 end-0 transform -translate-y-1/2 hover:bg-transparent bg-transparent text-foreground cursor-pointer"
				variant={"default"}>
				<Search />
			</Button>
		</form>
	);
};

export default SearchForHomeHero;
