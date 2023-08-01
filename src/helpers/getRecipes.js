import { key } from "../API/API_KEY";

export const getRecipes = async (search) => {
  const api = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${search}`
  );
  const data = await api.json();
  console.log(data, search);
//   console.log(api)
  return data;
};

