import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const DisplayFullMealCardSkeleton = () => {
	return (
		<div className="">
			<div className="border-foreground max-w-md rounded-2xl border">
				{/* Image Placeholder */}
				<Skeleton className="h-60 w-full rounded-t-2xl" />

				<div className="space-y-4 p-2">
					{/* Title Placeholder */}
					<Skeleton className="h-8 w-3/4" />

					<Separator />

					{/* Instructions Text Placeholder */}
					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
					</div>

					<Separator />

					{/* Ingredients Section */}
					<div className="flex flex-col gap-4">
						<Skeleton className="h-8 w-1/3" />{" "}
						{/* "Ingredients" Title */}
						<Separator />
						<ul className="space-y-3">
							<div className="flex items-center gap-4 rounded-lg border p-3 shadow-sm">
								{/* Bullet dot */}
								<Skeleton className="h-2 w-2 rounded-full" />

								{/* Ingredient Name */}
								<div className="flex-1">
									<Skeleton className="h-4 w-1/2" />
								</div>

								{/* Measure Badge */}
								<Skeleton className="h-6 w-16 rounded-full" />
							</div>
						</ul>
					</div>

					<Separator />

					{/* Buttons Section */}
					<div className="flex w-full flex-col gap-2">
						<Skeleton className="h-10 w-full" />
						<Skeleton className="h-10 w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DisplayFullMealCardSkeleton;
