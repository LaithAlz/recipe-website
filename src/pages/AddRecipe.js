import { useState } from "react";
import "../styles/AddRecipe.css";

const AddRecipe = () => {
  // const [ingredients, setIngredients] = useState([]);
  // const [item, setItem] = useState("");
  // const [cookTime, setCookTIme] = useState(0);
  // const [prepTime, setPrepTike] = useState(0);
  // const [servings, setServings] = useState(0);
  // const [recipes, setRecipes] = useState({});

  const [formData, setFormData] = useState({
    item: "",
    ingredients: [],
    cookTime: 0,
    prepTime: 0,
    servings: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addIngredient = (e) => {
    e.preventDefault();
    if (formData.item === "") {
      return;
    }
    const newIngredients = [...formData.ingredients, formData.item];
    setFormData((prevData) => ({
      ...prevData,
      ingredients: newIngredients,
      item: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("recipes", JSON.stringify(formData));
  };

  return (
    <div className="create-recipe">
      <h1>Add Your Own Recipe</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Add images</label>
        <input type="file" />

        <label>Cook Time (in minutes)</label>
        <input
          name="cookTime"
          value={formData.cookTime}
          onChange={handleInputChange}
          type="number"
        />

        <label>Prep Time (in minutes)</label>
        <input
          name="prepTime"
          value={formData.prepTime}
          onChange={handleInputChange}
          type="number"
        />

        <label>Servings</label>
        <input
          name="servings"
          value={formData.servings}
          onChange={handleInputChange}
          type="number"
        />

        <div className="ingredients">
          <h3>Ingredients: </h3>

          <input
            type="text"
            name="item"
            value={formData.item}
            onChange={handleInputChange}
          />
        </div>

        <button id="add-ingredient" onClick={addIngredient}>
          Add Ingredient
        </button>
        {/* {item} */}
        <ul>
          {formData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <button id="submit">ADD RECIPE</button>
      </form>
    </div>
  );
};

export default AddRecipe;
