import { REMOVE_DARKTHEME, ADD_DARKTHEME, TOGGLE_DARKTHEME } from '../actions/types'

const initialState = {
    darktheme: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DARKTHEME:
            return {
                ...state,
                darktheme: !state.darktheme,
            }
        case ADD_DARKTHEME:
            return {
                ...state,
                darktheme: true,
            }

        case REMOVE_DARKTHEME:
            return {
                ...state,
                darktheme: false
            }

        default:
            return state;
    }
}