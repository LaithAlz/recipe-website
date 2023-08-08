import { useParams } from "react-router-dom";
import '../styles/RecipeDetails.css'


const RecipeDetails = () => {
  const { id } = useParams();

  let recipes = JSON.parse(localStorage.getItem("recipes"));
  const data = recipes.filter((recipe) => {
    return recipe.id === id;
  })[0];

  return (
    <div className="details">
      <h1>{data.name} Recipe</h1>

        <p className="image"><img src={data.image} /></p>
      <p className="cookTime">Cook Time: {data.cookTime}</p>
      <p className="prepTime">Prep Time: {data.prepTime}</p>
      <p className="servings">Servings: {data.servings}</p>

      <ul className="ingredients">
        Ingredients:
        {data.ingredients.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default RecipeDetails;
