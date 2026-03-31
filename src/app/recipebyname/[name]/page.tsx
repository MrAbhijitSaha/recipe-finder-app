import DisplayMealCard from "@/components/CustomElements/Cards/DisplayMealCard";
import SearchForHomeHero from "@/components/CustomElements/Forms/SearchForHomeHero";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { fetchRecipeByName } from "@/lib/fetchData";

const page = async ({
	params,

	searchParams,
}: {
	params: Promise<{ name?: string }>;

	searchParams: Promise<{ page?: string }>;
}) => {
	console.log((await params).name);

	const userInputMealName = (await params).name;

	const { isSuccess, message, data } =
		await fetchRecipeByName(userInputMealName);

	let paginatedMeals = null;

	let totalPages = 0;

	const itemsPerPage = 6;

	const resolvedSearchParams = await searchParams;

	const currentPage = Number(resolvedSearchParams.page) || 1;

	if (data && Array.isArray(data)) {
		totalPages = Math.ceil(data.length / itemsPerPage);

		const startIndex = (currentPage - 1) * itemsPerPage;

		const endIndex = startIndex + itemsPerPage;

		paginatedMeals = data.slice(startIndex, endIndex);
	}

	return (
		<section className="mb-10 space-y-4">
			<div className="text-lg text-gray-400">
				You searched for :{" "}
				<span className="text-foreground uppercase">
					{userInputMealName}
				</span>
			</div>

			<SearchForHomeHero mealName={(await params).name || ""} />

			<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{!isSuccess ? (
					<div className="font-bold text-red-500">{message}</div>
				) : data === null ? (
					<div className="text-lg text-gray-400">
						{"We couldn't find any matches for "}:{" "}
						<span className="text-foreground uppercase">
							{userInputMealName}
						</span>
					</div>
				) : (
					<>
						{/* Map over paginatedMeals instead of the full fetchMealsData array */}

						{paginatedMeals?.map((item) => (
							<DisplayMealCard
								key={item.idMeal}
								data={item}
							/>
						))}
					</>
				)}
			</section>

			{/* Pagination Controls */}

			{totalPages > 1 && (
				<Pagination className="mt-8">
					<PaginationContent>
						<PaginationItem>
							{currentPage > 1 ? (
								<PaginationPrevious
									href={`/recipebyname/${userInputMealName}?page=${currentPage - 1}`}
								/>
							) : (
								<PaginationPrevious
									className="pointer-events-none opacity-50"
									href="#"
								/>
							)}
						</PaginationItem>

						{/* Dynamically render page numbers based on totalPages */}

						{Array.from({ length: totalPages }).map((_, i) => {
							const pageNum = i + 1;

							return (
								<PaginationItem key={pageNum}>
									<PaginationLink
										href={`/recipebyname/${userInputMealName}?page=${pageNum}`}
										isActive={currentPage === pageNum}>
										{pageNum}
									</PaginationLink>
								</PaginationItem>
							);
						})}

						<PaginationItem>
							{currentPage < totalPages ? (
								<PaginationNext
									href={`/recipebyname/${userInputMealName}?page=${currentPage + 1}`}
								/>
							) : (
								<PaginationNext
									className="pointer-events-none opacity-50"
									href="#"
								/>
							)}
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</section>
	);
};

export default page;
