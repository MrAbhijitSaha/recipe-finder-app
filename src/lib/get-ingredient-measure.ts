 // Define a type for the clean ingredient object we want to create
export interface Ingredient {
  ingredient: string;
  measure: string;
}

// Define a type for the meal object from the API.
// We only care about the keys that can be string or null.
// `Record<string, string | null>` is a simple way to type an object
// where we don't know all the keys, but we know their value type.
type Meal = Record<string, string | null>;

/**
 * Transforms a meal API object into a clean array of ingredients.
 * @param meal - The meal object from TheMealDB API.
 * @returns A clean array of { ingredient, measure } objects.
 */
export function getIngredients(meal: Meal): Ingredient[] {
  const ingredientsList: Ingredient[] = [];

  // Loop from 1 to 20
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    const ingredient = meal[ingredientKey];
    const measure = meal[measureKey];

    // If no ingredient (null, undefined, or empty string), stop
    if (!ingredient || ingredient.trim() === '') {
      continue; // Skips to the next loop iteration
    }

    // Add the clean data to our list
    ingredientsList.push({
      ingredient: ingredient.trim(),
      // Handle optional measures (null, undefined, or empty string)
      measure: (measure && measure.trim() !== '') ? measure.trim() : 'to taste'
    });
  }

  return ingredientsList;
}