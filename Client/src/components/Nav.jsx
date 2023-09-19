import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Buttone } from "./button";

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
          <Buttone onClick={randomize}>ADD RANDOM</Buttone>
          
        </>
      ) : (
        ""
      )}
      <Buttone onClick={logOut}>log out</Buttone>
    </div>
  );
}

export default Nav;
