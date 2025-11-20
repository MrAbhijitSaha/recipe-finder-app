import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DisplayMealCardPropsType } from "@/lib/alltypes";
import { getIngredients } from "@/lib/create-ingredients-list";
import Image from "next/image";
import Link from "next/link";

const DisplayFullMealCard = ({ data }: DisplayMealCardPropsType) => {
	const ingredients = getIngredients(data);

	return (
		<div className="border-foreground max-w-md rounded-2xl border">
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
				<p className="font-epundaSlab text-sm text-wrap">
					{data.strInstructions}
				</p>
				<Separator />
				<div className="flex flex-col gap-4">
					<h3 className="text-2xl">Ingredients</h3>
					<Separator />
					<ul className="space-y-3">
						{ingredients.map((ing, index) => (
							<div
								key={index}
								className="hover:bg-foreground/5 flex items-center gap-4 rounded-lg border p-3 shadow-sm">
								<div className="h-2 w-2 rounded-full bg-blue-500"></div>
								<div className="flex-1">
									<span className="text-foreground/60 block font-medium">
										{ing.ingredient}
									</span>
								</div>
								<span className="text-foreground/60 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold">
									{ing.measure}
								</span>
							</div>
						))}
					</ul>
				</div>

				<Separator />

				<div className="flex w-full flex-col gap-2">
					<Button
						className="w-full"
						asChild
						variant={"outline"}>
						<Link
							target="_blank"
							href={data.strYoutube}>
							Watch Recipe Video
						</Link>
					</Button>

					<Button
						className="w-full"
						asChild
						variant="outline">
						<Link
							target="_blank"
							href={`https://www.google.com/search?q=${data.strMeal}`}>
							Search On Internet
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DisplayFullMealCard;
