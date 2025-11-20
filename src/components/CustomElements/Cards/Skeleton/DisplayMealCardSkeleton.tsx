import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const DisplayMealCardSkeleton = () => {
	return (
		<div className="bg-foregro border-foreground items- flex flex-col gap-0 rounded-2xl border">
			<Skeleton className="h-60 w-full rounded-t-2xl" />

			<div className="space-y-4 p-2">
				<Skeleton className="h-8 w-3/4" />

				<Separator />

				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
				</div>

				<Separator />

				<Skeleton className="h-10 w-full" />
			</div>
		</div>
	);
};

export default DisplayMealCardSkeleton;
