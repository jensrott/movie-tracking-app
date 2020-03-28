import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store'

import AppRouter from './router/Router'

import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './themes'
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  // localStorage.setItem('darktheme', false)

  const setTheme = () => {
    // redux state if...
    let darkThemeStatus = JSON.parse(localStorage.getItem('darktheme'));
    if (darkThemeStatus) { // true
      return darkTheme
    } else { // false
      return lightTheme
    }
  }

  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={setTheme()}>
          <CssBaseline />
          <Router>
            <AppRouter />
          </Router>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
