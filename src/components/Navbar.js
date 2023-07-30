import { Link } from "react-router-dom";
import Logo from "../images/recipes-logo.png";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="My Recipes" />
      <div className="search">
        <form>
          <input type="search" placeholder="Search Recipe..." />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <div className="links">
        <Link>Vegetarian</Link>
        <Link>Dessert</Link>
        <Link>Random</Link>
        <Link>My Recipes</Link>
      </div>
    </div>
  );
};

export default Navbar;
