import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const DisplayMealCardSkeleton = () => {
	return (
		<div className="bg-foregro border-foreground flex flex-col items-center gap-0 rounded-2xl border">
			{/* Image Skeleton */}
			<Skeleton className="h-60 w-full rounded-t-2xl" />
			{/* h-60 is 240px, matching your Image height prop */}

			<div className="w-full space-y-4 p-2">
				{/* Title Skeleton */}
				<Skeleton className="h-8 w-3/4" />

				<Separator />

				{/* Instructions Skeleton */}
				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
				</div>

				<Separator />

				{/* Ingredients/Measure Skeleton */}
				<div className="flex justify-between">
					{/* Ingredients List Skeleton */}
					<div className="space-y-2">
						<Skeleton className="h-6 w-32" />{" "}
						{/* "Ingredients" title */}
						<ul className="space-y-1.5">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-4 w-24" />
						</ul>
					</div>

					{/* Vertical Separator Skeleton */}
					{/* Replicating your h-48 w-16 separator as a Skeleton block */}
					<Skeleton className="h-48 w-16" />

					{/* Measure List Skeleton */}
					<div className="space-y-2">
						<Skeleton className="h-6 w-28" />{" "}
						{/* "Measure" title */}
						<ul className="space-y-1.5">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-4 w-24" />
						</ul>
					</div>
				</div>

				<Separator />

				{/* Button Skeletons */}
				<div className="flex w-full flex-col gap-2">
					<Skeleton className="h-10 w-full" />{" "}
					{/* shadcn Button default height */}
					<Skeleton className="h-10 w-full" />
				</div>
			</div>
		</div>
	);
};

export default DisplayMealCardSkeleton;
