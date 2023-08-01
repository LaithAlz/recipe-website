import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value;
    
    setSearch(inputValue);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search..." />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default Search;
