import { Button } from "@mui/material";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/action";
import { useEffect, useState } from "react";


function Card(props) {
  const character = { props }
  const { id, removeFav, addFav, myFavorites } = props;

  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  function handleFavorite(character) {
    if (!isFav) {
      addFav(character)
      setIsFav(true)
    } else {
      removeFav(character.id)
      setIsFav(false)
      // addFav(id, props.image, props.status, props.species, props.gender, props.origin)
    }
  }
  return (
    <div>
      {
        isFav ? (
          <Button onClick={() => handleFavorite(id)}>❤️</Button>
        ) : (
          <Button onClick={() => handleFavorite(character)}>🤍</Button>
        )
      }
      <Button
        size="medium"
        style={{
          color: "white",
          marginRight: 50,
          backgroundColor: "transparent",
          fontWeight: 600,
        }}
        onClick={() => {
          props.onClose(id);
        }}>X</Button>

      <NavLink to={`/detail/${id} `}><h2 className="card-name">{props.name}</h2></NavLink>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
