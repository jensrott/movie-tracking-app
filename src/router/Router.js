import React from 'react';
import { Route, Switch } from "react-router-dom";

import Navigation from '../components/Navigation/Navigation';

import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';
import NotFound from '../pages/NotFound';
import About from '../pages/About';

const AppRouter = () => {
    return (
        <React.Fragment>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/movie/:id" component={MovieDetail} />
                <Route path='*' component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}

export default AppRouter;
