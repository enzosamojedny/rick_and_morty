import { Button } from "@mui/material";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/action";
import { useEffect, useState } from "react";
//eslint-disable-next-line
function Card(props) {
  const [closeBtn, setCloseBtn] = useState(true);
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
    if (!onClose) {
      setCloseBtn(false);
    }
    //eslint-disable-next-line
  }, []);
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

      {closeBtn && (
        <Button
          size="medium"
          style={{
            color: "yellow",
            marginRight: 50,
            backgroundColor: "transparent",
            fontWeight: 600,
          }}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </Button>)}
      <NavLink to={`/detail/${id}`}>
        <h2 className="card-name">{name}</h2>
      </NavLink>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      {/* <h2>{location}</h2> */}
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
//eslint-disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Card);
