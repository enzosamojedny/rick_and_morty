import { ADD_FAV, REMOVE_FAV } from "./action-types"

const initialState = {
    characters: [],
    myFavorites: []
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((characters) => {
                    characters.id !== action.payload
                })
            }
        default:
            return state
    }

}
