import React from 'react'
import PropTypes from 'prop-types'

import FavoriteMovie from './FavoriteMovie';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const FavoriteMoviesList = ({ favorites }) => {
    if (favorites.length !== 0) {
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    {favorites.map((favorite, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <FavoriteMovie favorite={favorite} />
                            </Grid>
                        )
                    })}
                </Grid>
            </React.Fragment>
        )
    } else {
        return (<p style={{ textAlign: 'center' }}>Add <Link to="/" style={{ fontWeight: "bold" }}>movies</Link> to your reading list!</p>)
    }
}

FavoriteMoviesList.propTypes = {
    movies: PropTypes.array,
}

export default FavoriteMoviesList
