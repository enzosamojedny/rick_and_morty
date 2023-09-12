import { ADD_FAV, REMOVE_FAV, FILTER, SORT, RESET } from "./action-types";

import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character)
    .then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};
export const filterCards = (gender) => {
  //! WE FILTER BY GENDER
  return { type: FILTER, payload: gender };
};

export const sortCards = (sort) => {
  //! WE SORT BY ID
  return { type: SORT, payload: sort };
};
export function reset() {
  return { type: RESET };
}
