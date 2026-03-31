"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeModeToggleButton from "../../Buttons/ThemeModeToggleButton";
import CurrentTime from "../CurrentTime";
import UserLocation from "../UserLocation";

const NavigationBar = () => {
	return (
		<>
			<section className="flex items-center justify-between">
				<Link href={"/"}>
					<Image
						src="/logo/black.png"
						alt="logo"
						height={40}
						width={40}
						className="block dark:hidden"
					/>
					<Image
						src="/logo/white.png"
						alt="logo"
						height={40}
						width={40}
						className="hidden dark:block"
					/>
				</Link>

				<div className="flex items-center gap-3">
					<ThemeModeToggleButton />
					{/* <NavOptions /> */}
				</div>
			</section>

			<div className="flex justify-center gap-2 text-xs sm:text-sm">
				{/* user's city and country */}
				<UserLocation />

				{/* user's local time */}
				<CurrentTime />
			</div>
		</>
	);
};

export default NavigationBar;
