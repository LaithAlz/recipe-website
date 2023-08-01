import { useState } from "react";
import "../styles/AddRecipe.css";

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [item, setItem] = useState("");


  const addIngredient = (e, item) => {
    e.preventDefault();
    setIngredients((prev) => {
      return [...ingredients, item];
    });

  };

  return (
    <div className="create-recipe">
      <h1>Add Your Own Recipe</h1>

      <form
        onSubmit={(e) => {
          addIngredient(e, item);
        }}
      >
        <label>Add images</label>
        <input type="file" />

        <label>Cook Time (in minutes)</label>
        <input type="number" />
        {/* <br /> */}

        <label>Prep Time (in minutes)</label>
        <input type="number" />
        {/* <br /> */}

        <label>Servings</label>
        <input type="number" />
        {/* <br /> */}
        <div className="ingredients">
          <h3>Ingredients: </h3>

          <input
            type="text"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>

        <button>Add Ingredient</button>

        {/* {item} */}
        <ul>
          {ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </form>
    </div>
  );
};

export default AddRecipe;
