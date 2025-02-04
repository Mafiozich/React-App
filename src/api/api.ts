import axios from "axios";
import { Recipe } from "../types";

const API_URL = "http://localhost:5000/recipes";

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
