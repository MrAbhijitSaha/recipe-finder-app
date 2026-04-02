import SearchFieldForByName from "@/components/CustomElements/Forms/SearchFieldForByName";
import Link from "next/link";

const page = () => {
	return (
		<section className="space-y-4 py-16">
			{/* welcome to recipe finder header */}
			<h1 className="text-2xl font-semibold md:text-6xl">
				Welcome to <br />
				<span className="font-cormorant text-4xl font-normal italic md:text-7xl">
					RECIPE FINDER.
				</span>
			</h1>
			<p className="font-robotoSlab text-lg">
				Not sure what to make? Just search below for a meal name or any
				ingredient we’ll handle the rest.
			</p>
			{/* search bar for meal  */}
			<SearchFieldForByName mealName="" />
			{/* try random recpe */}
			<div>
				Don't want to search?{" "}
				<Link
					href={"/randommeal"}
					className="text-primary underline">
					Try A Surprise Meal.
				</Link>
			</div>{" "}
		</section>
	);
};

export default page;
