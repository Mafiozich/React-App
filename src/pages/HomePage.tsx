import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setQuery } from "../entities/search/model/searchSlice";
import { useEffect, useState } from "react";
import { fetchRecipes } from "../api/api";
import { RecipeCard } from "../components/RecipeCard";
import { Recipe } from "../types";
import { SearchBar } from "../components/SearchBar";

export const HomePage = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  useEffect(() => {
    // После того как query изменяется, фильтруем рецепты
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
  }, [query, recipes]); // Перезапускать каждый раз, когда query или recipes изменяются

  return (
    <div>
      <h1>Поиск рецептов</h1>
      <SearchBar />{" "}
      {/* Теперь SearchBar использует Redux для получения query */}
      {filteredRecipes.length > 0 ? (
        <RecipeCard recipe={filteredRecipes[0]} />
      ) : (
        <p>Рецепт не найден</p>
      )}
    </div>
  );
};
