import SearchForHomeHero from "../Forms/SearchForHomeHero";

const HomeHero = () => {
	return (
		<div className="py-16 space-y-2">
			<div className="text-2xl md:text-6xl font-semibold">
				Welcome to <br />
				<span className="italic font-normal text-7xl font-cormorant">
					RECIPE FINDER.
				</span>
			</div>
			<div className="text-lg font-robotoSlab">
				Not sure what to make? Just search below for a meal name or any
				ingredient we’ll handle the rest.
			</div>
			<SearchForHomeHero />
			<div className="font-robotoSlab text-lg">Or Try a Random Meal </div>
		</div>
	);
};

export default HomeHero;
