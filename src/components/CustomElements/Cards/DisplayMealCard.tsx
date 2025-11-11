import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DisplayMealCardPropsType } from "@/lib/alltypes";
import Image from "next/image";
import Link from "next/link";

const DisplayMealCard = ({ data }: DisplayMealCardPropsType) => {
	return (
		<div className="bg-foregro flex flex-col items-center p-4 rounded-2xl border-foreground border gap-4">
			<Image
				src={data.strMealThumb}
				alt=""
				height={240}
				width={240}
				className="rounded-2xl w-full"
			/>
			<div className="px-2 space-y-4">
				<h1 className="text-2xl font-epundaSlab">{data.strMeal}</h1>

				<Separator />
				<p className="font-epundaSlab">{data.strInstructions}</p>
				<Separator />
				<div className="flex justify-between">
					<h3 className="text-xl">Ingredients</h3>
					<ul className="grid grid-cols-2 gap-1">{}</ul>

					<Separator
						orientation="vertical"
						className="h-48 w-16"
					/>

					<h3 className="text-xl">Measure</h3>
					<ul className="grid grid-cols-2 gap-1">{}</ul>
				</div>
				<Separator />
				<div className="md:flex flex-row w-full gap-2 ">
					<Link
						target="_blank"
						href={data.strYoutube}
						className="w-full">
						<Button className="w-full">Watch Recipe Video</Button>
					</Link>

					<Link
						target="_blank"
						href={`https://www.google.com/search?q=${data.strMeal}`}
						className=" w-full">
						<Button className="w-full">Search On Internet</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DisplayMealCard;
