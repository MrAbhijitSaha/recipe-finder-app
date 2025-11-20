import DisplayMealCard from "@/components/CustomElements/Cards/DisplayMealCard";
import SearchForHomeHero from "@/components/CustomElements/Forms/SearchForHomeHero";
import { fetchRecipeByName } from "@/lib/fetch-data";

const page = async ({ params }: { params: Promise<{ name?: string }> }) => {
	const userInputMealName = (await params).name;

	let fetchMealsData = null;
	let fetchError = null;

	try {
		fetchMealsData = await fetchRecipeByName(userInputMealName);

		console.log(fetchMealsData);
	} catch (error) {
		// this sorry string message made fetchError not null
		fetchError = "Sorry, we couldn't load meals. Please try again.";
		console.log(error);
	}

	return (
		<section className="space-y-4">
			<div className="text-lg text-gray-400">
				You searched for :{" "}
				<span className="uppercase text-foreground">
					{userInputMealName}
				</span>
			</div>

			<SearchForHomeHero />

			<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{/* if retchError is not null display the sorry.. message, else if api (userInputMealName) returns null display no meal found, else display meals card */}
				{fetchError ? (
					<div className="font-bold text-red-500">{fetchError}</div>
				) : fetchMealsData === null ? (
					<div className="text-lg text-gray-400">
						{"We couldn't find any matches for "}:{" "}
						<span className="text-foreground uppercase">
							{userInputMealName}
						</span>
					</div>
				) : (
					<>
						{fetchMealsData.map((item) => (
							<DisplayMealCard
								key={item.idMeal}
								data={item}
							/>
						))}
					</>
				)}
			</section>
		</section>
	);
};

export default page;
