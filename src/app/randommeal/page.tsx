import DisplayFullMealCard from "@/components/CustomElements/Cards/DisplayFullMealCard";
import RandomMealBtn from "@/components/ui/CustomUi/RefreshPageBtn";
import { fetchARandomMeal } from "@/lib/fetch-data";

const page = async () => {
	const fetchMealsData = await fetchARandomMeal();

	//   const  fetchMealsData = await fetchARandomMeal();

	return (
		<>
			<RandomMealBtn text="Try Another" />
			<div className="grid place-items-center py-4">
				{fetchMealsData.map((item) => (
					<DisplayFullMealCard
						data={item}
						key={item.idMeal}
					/>
				))}
			</div>
		</>
	);
};

export default page;
