import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { recipesContext } from "./API/API_Context";
import { getPopular } from "./helpers/getPopular";
import { useEffect, useState } from "react";

function App() {
  const [random, setRandom] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopular();
      setRandom(response.recipes);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <recipesContext.Provider value={{ random }}>
          <Navbar setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Home search={search} />} />
          </Routes>
          <Footer />
        </recipesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
