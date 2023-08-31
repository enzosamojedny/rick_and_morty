import { Button } from "@mui/material";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/action";
import { useEffect, useState } from "react";


function Card(props) {
  const [isFav, setFav] = useState(false);
  const {
    id,
    name,
    status,
    gender,
    image,
    species,
    origin,
    onClose,
    myFavorites,
    removeFav,
    addFav,
  } = props
  //*const [closeBtn, setCloseBtn] = useState(true)

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites, id]);

  function handleFavorite() {
    if (!isFav) {

      addFav(

        {
          id,
          name,
          status,
          gender,
          image,
          species,
          origin
        }
      )
      setFav(true);
    } else {

      setFav(false);
      removeFav(id);
    }
  }
  return (
    <div>
      {isFav ? (
        <Button onClick={() => handleFavorite(id)}>❤️</Button>
      ) : (
        <Button onClick={() => handleFavorite(id)}>🤍</Button>
      )}
      <Button
        size="medium"
        style={{
          color: "white",
          marginRight: 50,
          backgroundColor: "transparent",
          fontWeight: 600,
        }}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </Button>
      <NavLink to={`/detail/${id}`}>
        <h2 className="card-name">{name}</h2>
      </NavLink>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={`${name}`} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
