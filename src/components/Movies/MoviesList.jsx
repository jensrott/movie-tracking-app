import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'
import { Grid } from '@material-ui/core'

const MoviesList = ({ movies }) => {

    return (
        movies ?
            <React.Fragment>
                <Grid container spacing={3}>
                    {movies.map((movie, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Movie movie={movie} />
                            </Grid>
                        )
                    })}
                </Grid>
            </React.Fragment>
            : null
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
}

export default MoviesList
