import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav({ onSearch, randomize, logOut, isActiveButtons }) {
  const location = useLocation();

  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites </Link>
      <SearchBar onSearch={onSearch} isActiveButtons={isActiveButtons} />
      {location.pathname === "/home" && isActiveButtons ? (
        <>
          <button onClick={randomize}>ADD RANDOM</button>
          
        </>
      ) : (
        ""
      )}
      <button onClick={logOut}>log out</button>
    </div>
  );
}

export default Nav;
