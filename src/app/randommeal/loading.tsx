import DisplayFullMealCardSkeleton from "@/components/CustomElements/Cards/Skeleton/DisplayFullMealCardSkeleton";

const loading = () => {
	return (
		// 1. min-h-screen: Makes the container tall enough to center vertically
		// 2. w-full: Ensures container is wide enough
		// 3. flex justify-center items-center: Centers the content
		// 4. p-4: Adds breathing room on mobile screens
		<div className="flex min-h-screen w-full items-center justify-center p-4">
			<DisplayFullMealCardSkeleton />
		</div>
	);
};

export default loading;
