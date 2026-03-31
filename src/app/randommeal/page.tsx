import RefreshPageBtn from "@/components/Buttons/RefreshPageBtn";
import DisplayFullMealCard from "@/components/CustomElements/Cards/DisplayFullMealCard";

import { fetchARandomMeal } from "@/lib/fetchData";

const page = async () => {
	const { data, isSuccess, message } = await fetchARandomMeal();

	return (
		<section className="grid place-items-center gap-4">
			{data === null || !isSuccess ? (
				<p className="text-xl">{message}</p>
			) : (
				<div className="py-4">
					{data.map((item) => (
						<DisplayFullMealCard
							data={item}
							key={item.idMeal}
						/>
					))}
				</div>
			)}

			{/* refresh page button for change random meal */}
			<RefreshPageBtn
				text={`${isSuccess ? "Try Another" : "Try Again"}`}
			/>
		</section>
	);
};

export default page;
