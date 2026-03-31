import { AR_One_Sans, Fragment_Mono, Inter } from "next/font/google";

const mono = Fragment_Mono({
	weight: "400",
	display: "swap",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-mono",
});

const sans = AR_One_Sans({
	display: "swap",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-sans",
});

const serif = Inter({
	display: "swap",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-serif",
});

export const allFontVariables = [
	mono.variable,
	sans.variable,
	serif.variable,
].join(" ");
