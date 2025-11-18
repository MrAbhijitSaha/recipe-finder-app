import { ReactNode } from "react";

export type RootLayoutPropsType = Readonly<{
	children: ReactNode;
}>;

// api data types

export interface Root {
	meals: Meal[];
}

export interface Meal {
	idMeal: string;
	strMeal: string;
	strMealAlternate: boolean | null | string;
	strCategory: string;
	strArea: string;
	strInstructions: string;
	strMealThumb: string;
	strTags: string;
	strYoutube: string;
	strIngredient1: string;
	strIngredient2: string;
	strIngredient3: string;
	strIngredient4: string;
	strIngredient5: string;
	strIngredient6: string;
	strIngredient7: string;
	strIngredient8: string;
	strIngredient9: string;
	strIngredient10: string;
	strIngredient11: string;
	strIngredient12: string;
	strIngredient13: string;
	strIngredient14: string;
	strIngredient15: string;
	strIngredient16: string;
	strIngredient17: string;
	strIngredient18: string;
	strIngredient19: string;
	strIngredient20: string;
	strMeasure1: string;
	strMeasure2: string;
	strMeasure3: string;
	strMeasure4: string;
	strMeasure5: string;
	strMeasure6: string;
	strMeasure7: string;
	strMeasure8: string;
	strMeasure9: string;
	strMeasure10: string;
	strMeasure11: string;
	strMeasure12: string;
	strMeasure13: string;
	strMeasure14: string;
	strMeasure15: string;
	strMeasure16: string;
	strMeasure17: string;
	strMeasure18: string;
	strMeasure19: string;
	strMeasure20: string;
	strSource: string;
	strImageSource: boolean | null | string;
	strCreativeCommonsConfirmed: boolean | null | string;
	dateModified: boolean | null | string;
}

export type DisplayMealCardPropsType = {
	data: Meal;
};


export type IngredientType = {
	ingredient: string;
	measure: string;
};





//type for user location
export interface GeoLocationState {
	ip: string;
	network: string;
	version: string;
	city: string;
	region: string;
	region_code: string;
	country: string;
	country_name: string;
	country_code: string;
	country_code_iso3: string;
	country_capital: string;
	country_tld: string;
	continent_code: string;
	in_eu: boolean;
	postal: string;
	latitude: number;
	longitude: number;
	timezone: string;
	utc_offset: string;
	country_calling_code: string;
	currency: string;
	currency_name: string;
	languages: string;
	country_area: number;
	country_population: number;
	asn: string;
	org: string;
}

