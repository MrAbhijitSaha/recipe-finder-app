import { Cormorant, Epunda_Slab, Kalam, Roboto_Slab } from "next/font/google";

const kalam = Kalam({
	weight: "400",
	display: "swap",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-kalam",
});

const cormorant = Cormorant({
	display: "swap",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-cormorant",
});

const robotoSlab = Roboto_Slab({
	display: "swap",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-robotoSlab",
});

const epundaSlab = Epunda_Slab({
	display: "swap",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-epundaSlab",
});

export const allFontVariables = [
	kalam.variable,
	cormorant.variable,
	robotoSlab.variable,
	epundaSlab.variable,
].join(" ");
