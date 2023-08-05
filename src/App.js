import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { recipesContext } from "./API/API_Context";
import { getPopular } from "./helpers/getPopular";
import { useEffect, useState } from "react";
import { getRecipes } from "./helpers/getRecipes";
import AddRecipe from "./pages/AddRecipe";
import RecipesList from "./pages/RecipesList";

function App() {
  const [random, setRandom] = useState(null);
  const [search, setSearch] = useState("");
  const [recipeFinder, setRecipeFinder] = useState("");

  useEffect(() => {
    const fetchPopular = async () => {
      const response = await getPopular();
      setRandom(response.recipes);
    };
    fetchPopular();
  }, []);

  useEffect(() => {
    const fetchSearch = async (search) => {
      const response = await getRecipes(search);
      setRecipeFinder(response);
    };
    fetchSearch(search);
  }, [search]);

  return (
    <div className="App">
      <BrowserRouter>
        <recipesContext.Provider value={{ random, recipeFinder }}>
          <Navbar setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Home search={search} />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/myrecipes" element={<RecipesList />} />
          </Routes>
          <Footer />
        </recipesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
