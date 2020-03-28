import { combineReducers } from 'redux';
import movieReducer from './movieReducer'
import themeReducer from './themeReducer';

export default combineReducers({
    movies: movieReducer,
    darktheme: themeReducer,
})