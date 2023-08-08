import { Link } from "react-router-dom";


const RecipeItem = ({ recipe }) => {
  const { name, ingredients, cookTime, prepTime, id } = recipe;
  return (
    <Link to={`/myrecipes/${recipe.id}`}>
      <div className="recipe-item">{name}</div>
    </Link>
  );
};

export default RecipeItem;
