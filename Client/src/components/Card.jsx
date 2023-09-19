import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { Image, CardStyle } from "./card.Styled";
import { Buttone } from "./button";
import { CardContainer } from "./cardContainer";
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
      <CardContainer>
        <CardStyle>
          
        {isFav ? (
          <Buttone
          onClick={() => {
            handleFavorite(character.id);
          }}
          >
            ❤️
          </Buttone>
        ) : (
          <Buttone
          onClick={() => {
            handleFavorite(character);
          }}
          >
            🤍
          </Buttone>
        )}
        {isActiveButtons ? (
          <Buttone
          onClick={() => {
            onClose(character.id);
          }}
          >
            X
          </Buttone>
        ) : (
          ""
          )}
        <h2>Name: {character.name}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <Image
          src={character.image}
          alt={character.name}
          onClick={navigateHandler}
          />
          </CardStyle>
      </CardContainer>
    );
  };


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
