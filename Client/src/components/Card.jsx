import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";

function Card(props) {
  const navigate = useNavigate();
  const { character, myFavorites, addFav, removeFav, onClose, isActiveButtons } =props;
  const [isFav, setFav] = useState(false);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [myFavorites]);

  function handleFavorite(character) {
    if (!isFav) {
      addFav(character); //{}
      setFav(true);
    } else {
      removeFav(character); //id
      setFav(false);
    }
  }

  return (
    <div>
      {isFav ? (
        <button
          onClick={() => {
            handleFavorite(character.id);
          }}
        >
          ❤️
        </button>
      ) : (
        <button
          onClick={() => {
            handleFavorite(character);
          }}
        >
          🤍
        </button>
      )}
      {isActiveButtons ? (
        <button
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </button>
      ) : (
        ""
      )}
      <h2>Name: {character.name}</h2>
      <h2>Species: {character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <img
        src={character.image}
        alt={character.name}
        onClick={navigateHandler}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
