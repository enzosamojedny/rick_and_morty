import { ADD_FAV, REMOVE_FAV, FILTER, SORT, RESET } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []//*esta es una copia de myFavorites, aca puedo hacer modificaciones
}

export default function reducer(state = initialState, action) {
    let estadoGlobal;
    switch (action.type) {
        case ADD_FAV:
            return {    
                ...state,//*pq spread del state?
                myFavorites: [...state.allCharacters, action.payload],//son copias exactas
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((characters) =>
                    characters.id !== action.payload
                )
            }
        case FILTER:
            return {
                ...state,
                filtered: state.allCharacters.filter(characters =>
                    //im not using filtered variable
                    characters.gender === action.payload)
                    //trabajo con la copia de favoritos
            }
        case SORT:
            estadoGlobal = [...state.allCharacters]
            if (action.payload === "ascendente") {
                estadoGlobal.sort((a, b) => a.id - b.id)
            } else {
                estadoGlobal.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: estadoGlobal//why?
            }
        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }
        default:
            return state
    }

}
