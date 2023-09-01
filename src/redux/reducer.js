import { ADD_FAV, REMOVE_FAV } from "./actionsTypes"

let initialState = {characters:[], myFavorites:[]}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
        return {...state,
        myFavorites: [...state.myFavorites, action.payload] 
        };
 
        case  REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                  (characters) => characters.id !== action.payload
                ),
              };
        default: 
        return state
    }
}

export default rootReducer;