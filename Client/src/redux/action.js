import { ADD_FAV, REMOVE_FAV, FILTER, SORT, RESET } from "./action-types"

export function addFav(character) {
    return {
        type: ADD_FAV,
        payload: character
    }
}
export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
export const filterCards = (gender) => {//! WE FILTER BY GENDER
    return { type: FILTER, payload: gender };
};

export const sortCards = (sort) => {//! WE SORT BY ID
    return { type: SORT, payload: sort };
};
export function reset() {
    return { type: RESET }
}