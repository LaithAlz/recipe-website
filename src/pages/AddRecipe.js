import { useState } from "react";
import "../styles/AddRecipe.css";
import { v4 as uuidv4 } from "uuid";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    ingredients: [],
    cookTime: "0",
    prepTime: "0",
    servings: "0",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      let reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
    // console.log(formData);

    const newRecipe = {
      ...formData,
      id: uuidv4(),
    };

    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    setFormData({
      item: "",
      ingredients: [],
      cookTime: "0",
      prepTime: "0",
      servings: "0",
      image: "",
    });
  };

  return (
    <div className="create-recipe">
      <h1>Add Your Own Recipe</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Recipe Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          type="text"
        />

        <label>Add images</label>
        <input type="file" name="image" onChange={handleInputChange} />

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
