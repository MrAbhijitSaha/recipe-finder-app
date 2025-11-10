"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeModeToggle from "../ThemeChanger/ThemeModeToggle";
import NavOptions from "./NavOptions";

const NavigationBar = () => {
	return (
		<section className="flex items-center justify-between">
			<Link href={"/"}>
				<Image
					src="/logo/black.png"
					alt="logo"
					height={45}
					width={45}
					className="block dark:hidden"
				/>
				<Image
					src="/logo/white.png"
					alt="logo"
					height={45}
					width={45}
					className="hidden dark:block"
				/>
			</Link>

			<div className="flex items-center gap-3">
				<ThemeModeToggle />
				<NavOptions />
			</div>
		</section>
	);
};

export default NavigationBar;
