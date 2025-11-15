// MealDialogCard.tsx

import { Button } from "@/components/ui/button";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { DisplayMealCardPropsType } from "@/lib/alltypes";
import { getIngredients } from "@/lib/create-ingredients-list";
import Link from "next/link";

// You'll probably want to pass the 'data' prop in here too
// import { DisplayMealCardPropsType } from "@/lib/alltypes";

// const MealDialogCard = ({ data }: DisplayMealCardPropsType) => { // <-- Like this
const MealDialogCard = ({ data }: DisplayMealCardPropsType) => {
	const ingredients = getIngredients(data);

	return (
		<DialogContent className="max-h-screen overflow-y-auto">
			<DialogHeader>
				<DialogTitle className="text-base md:text-2xl">
					{data.strMeal}
				</DialogTitle>
				<Separator />
				<DialogDescription>{data.strInstructions}</DialogDescription>
			</DialogHeader>
			<div className="flex justify-between gap-4">
				<div className="space-y-4">
					<h3 className="text-2xl">Ingredients</h3>
					<Separator />
					<ul>
						{ingredients.map((ing, index) => (
							<li key={index}>{ing.ingredient}</li>
						))}
					</ul>
				</div>
				<Separator
					orientation="vertical"
					className="h-6 w-px"
				/>
				<div className="space-y-4">
					<h3 className="text-2xl">Measure</h3>
					<Separator />
					<ul className="text-end">
						{ingredients.map((msr, index) => (
							<li key={index}>{msr.measure}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex w-full flex-col gap-2">
				<Button className="w-full" asChild variant={"outline"}>
				<Link
					target="_blank"
					href={data.strYoutube}
					>

					Watch Recipe Video
				</Link>
					</Button>

					<Button className="w-full" asChild variant="outline">
				<Link
					target="_blank"
					href={`https://www.google.com/search?q=${data.strMeal}`}
					>
						Search On Internet
				</Link>
						</Button>
			</div>
		</DialogContent>
	);
};

export default MealDialogCard;
