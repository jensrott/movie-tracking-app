import { REMOVE_DARKTHEME, ADD_DARKTHEME, TOGGLE_DARKTHEME } from './types'

export const toggleDarktheme = () => dispatch => {
    // console.log('click')
    let darktheme = JSON.parse(localStorage.getItem('darktheme'))
    console.log(darktheme);
    localStorage.setItem('darktheme', JSON.stringify(!darktheme))
    return { type: TOGGLE_DARKTHEME }
}

export const addDarktheme = () => dispatch => {
    localStorage.setItem('darktheme', 'true')
    return { type: ADD_DARKTHEME }
}

export const removeDarktheme = () => dispatch => {
    localStorage.setItem('darktheme', 'false')
    return { type: REMOVE_DARKTHEME }
}