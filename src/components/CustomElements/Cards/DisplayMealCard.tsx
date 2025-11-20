import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { DisplayMealCardPropsType } from "@/lib/alltypes";
import Image from "next/image";
import MealDialogCard from "./MealDialogCard";

const DisplayMealCard = ({ data }: DisplayMealCardPropsType) => {
	return (
		<div className="bg-foregro border-foreground flex flex-col items- gap-0 rounded-2xl border">
			<Image
				src={data.strMealThumb}
				alt={data.strMeal}
				height={240}
				width={240}
				className="w-full rounded-t-2xl"
			/>
			<div className="space-y-4 p-2">
				<h1 className="font-epundaSlab text-2xl">{data.strMeal}</h1>

				<Separator />
				<p className="font-epundaSlab line-clamp-3 text-sm text-wrap">
					{data.strInstructions}
				</p>
				<Separator />

				<Dialog>
					<DialogTrigger asChild>
						<Button className="w-full">See Full Recipe</Button>
					</DialogTrigger>
					<MealDialogCard data={data} />
				</Dialog>
			</div>
		</div>
	);
};

export default DisplayMealCard;
