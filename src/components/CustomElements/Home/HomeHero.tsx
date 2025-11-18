import { Button } from "@/components/ui/button";
import SearchForHomeHero from "../Forms/SearchForHomeHero";

const HomeHero = () => {
	return (
		<div className="space-y-2 py-16">
			<div className="text-2xl font-semibold md:text-6xl">
				Welcome to <br />
				<span className="font-cormorant text-7xl font-normal italic">
					RECIPE FINDER.
				</span>
			</div>
			<div className="font-robotoSlab text-lg">
				Not sure what to make? Just search below for a meal name or any
				ingredient we’ll handle the rest.
			</div>
			<SearchForHomeHero />
			<Button className="font-robotoSlab text-lg" variant={"outline"}>Or Try a Random Meal </Button>
		</div>
	);
};

export default HomeHero;
