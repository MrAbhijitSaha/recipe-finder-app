// import { fetchRecipeByLetter } from "@/lib/fetch";

import DisplayMealCard from "@/components/CustomElements/Cards/DisplayMealCard";
import DisplayMealCardSkeleton from "@/components/CustomElements/Cards/DisplayMealCardSkeleton";
import SearchForHomeHero from "@/components/CustomElements/Forms/SearchForHomeHero";
import { fetchRecipeByName } from "@/lib/fetch-data";
import { Suspense } from "react";

// export default async function SearchBar({
// 	params,
// }: {
// 	params: Promise<{ letter?: string }>;
// }) {
// 	const xyz = (await params).letter;

// 	const fData = await fetchRecipeByLetter(xyz);

// 	console.log(fData);

// 	return (
// 		<>
// 			<h1>Product: {xyz}</h1>
// 		</>
// 	);
// }

const page = async ({ params }: { params: Promise<{ name?: string }> }) => {
	const userInputMealName = (await params).name;

	const fetchMealsData = await fetchRecipeByName(userInputMealName);

	console.log(fetchMealsData);

	return (
		<section className="space-y-4">
			<div className="">You Searched {userInputMealName}</div>

			<SearchForHomeHero />

			<Suspense fallback={<DisplayMealCardSkeleton />}>
				<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{fetchMealsData.map((item) => (
						<DisplayMealCard
							key={item.idMeal}
							data={item}
						/>
					))}
				</section>
			</Suspense>
		</section>
	);
};

export default page;
