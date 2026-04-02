import SearchFieldForByName from "@/components/CustomElements/Forms/SearchFieldForByName";
import DisplayFullMealCardSkeleton from "@/components/CustomElements/Skeleton/DisplayFullMealCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<section className="space-y-4">
			{/* Skeleton for "You Searched..." text */}
			<Skeleton className="h-5 w-48" />

			{/* The actual search bar  */}
			<SearchFieldForByName mealName="" />

			{/* Your grid of skeletons */}
			<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<DisplayFullMealCardSkeleton />
				<DisplayFullMealCardSkeleton />
				<DisplayFullMealCardSkeleton />
			</section>
		</section>
	);
};

export default Loading;
