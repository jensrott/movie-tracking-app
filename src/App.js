import React, {useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store'

import AppRouter from './router/Router'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './themes'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  // Here we get the global state and check if true or false
  // const [darkState, setDarkState] = useState(false);
  // const darkState = useSelector(state => state.darktheme)
  const darkState = store.getState().darktheme.darktheme;
  console.log(darkState);
  const theme = darkState ? darkTheme : lightTheme;
  console.log('current theme: ' + darkState);

  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  // };
  // localStorage.setItem('darktheme', false)

  // const setTheme = () => {
  //   // redux state if...
  //   let darkThemeStatus = JSON.parse(localStorage.getItem('darktheme'));
  //   if (darkThemeStatus) { // true
  //     return darkTheme
  //   } else { // false
  //     return lightTheme
  //   }
  // }

  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
            <AppRouter />
          </Router>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
