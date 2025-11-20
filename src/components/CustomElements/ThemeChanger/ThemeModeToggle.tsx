"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeModeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<Button
				variant="ghost"
				size="icon-lg"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
				<Sun className="h-6 w-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<Moon className="absolute h-6 w-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			</Button>
		</div>
	);
};

export default ThemeModeToggle;
