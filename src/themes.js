import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#303030',
        },
        secondary: {
            main: '#424242',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#000',
        },
    },
})