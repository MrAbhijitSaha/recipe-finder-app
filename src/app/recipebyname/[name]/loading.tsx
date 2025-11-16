import MealDialogCardSkeleton from "@/components/CustomElements/Cards/DisplayMealCardSkeleton";
import SearchForHomeHero from "@/components/CustomElements/Forms/SearchForHomeHero"; // or its skeleton
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<section className="space-y-4">
			{/* Skeleton for "You Searched..." text */}
			<Skeleton className="h-5 w-48" />

			{/* The actual search bar (or a skeleton for it) */}
			<SearchForHomeHero />

			{/* Your grid of skeletons */}
			<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<MealDialogCardSkeleton />
				<MealDialogCardSkeleton />
				<MealDialogCardSkeleton />
			</section>
		</section>
	);
}
