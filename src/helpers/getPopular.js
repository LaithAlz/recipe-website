import { key } from "../API/API_KEY";

export const getPopular = async () => {
  const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`
  );
  const data = await api.json();
  // console.log(data);
  return data;
};

