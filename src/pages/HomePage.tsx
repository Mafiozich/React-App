import { useState, useEffect } from "react";
import { fetchRecipes } from "../api/api";
import { Recipe } from "../types";
import { SearchBar } from "../components/SearchBar";
import { RecipeCard } from "../components/RecipeCard";

export const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  const handleSearch = (query: string) => {
    const ingredients = query
      .toLowerCase()
      .split(",")
      .map((i) => i.trim());
    const sortedRecipes = [...recipes].sort((a, b) => {
      const aCount = a.ingredients.filter((i) =>
        ingredients.includes(i.toLowerCase())
      ).length;
      const bCount = b.ingredients.filter((i) =>
        ingredients.includes(i.toLowerCase())
      ).length;
      return bCount - aCount;
    });

    setFilteredRecipes(sortedRecipes.length > 0 ? [sortedRecipes[0]] : []);
  };

  return (
    <div>
      <h1>Поиск рецептов</h1>
      <SearchBar onSearch={handleSearch} />
      {filteredRecipes.length > 0 ? (
        <RecipeCard recipe={filteredRecipes[0]} />
      ) : (
        <p>Рецепт не найден</p>
      )}
    </div>
  );
};
