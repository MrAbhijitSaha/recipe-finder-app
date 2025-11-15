"use client";

import CurrentTime from "@/components/CustomElements/Features/CurrentTime";
import UserLocation from "@/components/CustomElements/Features/UserLocation";
import HomeHero from "@/components/CustomElements/Home/HomeHero";

const page = () => {
	return (
		<>
			<HomeHero />

			<div>
				<h2>User Dashboard</h2>

				<hr />
				<CurrentTime />

				<hr />
				<UserLocation />

				<hr />
			</div>
		</>
	);
};

export default page;
