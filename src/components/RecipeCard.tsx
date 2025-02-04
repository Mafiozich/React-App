import { Recipe } from "../types";

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <div>
    <h2>{recipe.title}</h2>
    <p>
      <strong>Ингредиенты:</strong> {recipe.ingredients.join(", ")}
    </p>
    <p>
      <strong>Приготовление:</strong> {recipe.instructions}
    </p>
  </div>
);
