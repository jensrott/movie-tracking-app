import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/types';

const initialState = {
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
}

export default function (state = initialState, action) {
    switch (action.type) {

        // Works V
        case ADD_FAVORITE:
            let newFavorite = action.payload;
            let allFavorites = state.favorites;
            allFavorites.push(newFavorite)
            return {
                ...state,
                favorites: allFavorites
            }
        // Works V
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.imdbID !== action.payload) // Remove the movie with the id that matches the payload.
            };

        default:
            return state;
    }
}