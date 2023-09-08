import { connect, useDispatch } from "react-redux";
import Cards from "../components/Cards";
import { filterCards, orderCards, reset } from "../redux/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="B">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Gender less">Gender less</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={resetHandler}>RESET</button>
      <Cards characters={myFavorites} isActiveButtons={false} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
