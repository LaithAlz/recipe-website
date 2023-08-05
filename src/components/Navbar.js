import { Link } from "react-router-dom";
import Logo from "../images/recipes-logo.png";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Search from "./Search";

const Navbar = ({ setSearch }) => {
  const [toggle, setToggle] = useState(true);
  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar" id={toggle ? "open" : "close"}>
      <Link to="/">
        <img src={Logo} alt="My Recipes" />
      </Link>

      <Search setSearch={setSearch} />

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/myrecipes">My Recipes</Link>
        <Link to="/vegetarian">Vegetarian</Link>
        <Link to="/random">Random</Link>
        <Link to="/addrecipe">Add recipe</Link>
      </div>

      <div className="hidden-menu">
        <button onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
