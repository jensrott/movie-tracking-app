import { ADD_FAVORITE, REMOVE_FAVORITE } from './types'

export const addFavorite = (movie) => dispatch => {
    dispatch({
        type: ADD_FAVORITE,
        payload: movie
    })
    console.log(`Added movie: ${movie}`)
}

export const removeFavorite = (movieId) => dispatch => {
    dispatch({
        type: REMOVE_FAVORITE,
        payload: movieId
    })
    console.log(`Removed movie with ID: ${movieId}`)
}