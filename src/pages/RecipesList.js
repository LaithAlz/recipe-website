import RecipeItem from "../components/RecipeItem";
import "../styles/RecipesList.css";

const RecipesList = () => {
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  console.log(recipes, typeof recipes);

  return (
    <div className="recipes">
      {recipes.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe}/>
      })}
    </div>
  );
};

export default RecipesList;
