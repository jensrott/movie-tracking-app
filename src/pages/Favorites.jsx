import React from 'react'
import FavoriteMoviesList from '../components/Movies/FavoriteMoviesList'

import { useSelector } from 'react-redux'
import { makeStyles, Typography, Container, Paper, Fab } from '@material-ui/core'

import ScrollTopButton from '../components/Utils/ScrollTopButton'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Favorites = (props) => {

    const useStyles = makeStyles(({
        root: {
            padding: '1.5rem',
            margin: '2rem 0'
        },
        title: {
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem'
        },
    }))

    // State and localstorage should both be the same
    const favorites = useSelector(state => state.movies.favorites)
    console.log("favorites status:" + favorites);

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                {/* Make this a new component <Title> or something, because we also use it in Home */}
                <Paper className={classes.root}>
                    <Typography variant="h3" className={classes.title}>Favorites</Typography>
                </Paper>
                <FavoriteMoviesList favorites={favorites} />
                <ScrollTopButton {...props}>
                    <Fab color="primary" size="medium" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTopButton>
            </Container>
        </React.Fragment>
    )
}

export default Favorites
