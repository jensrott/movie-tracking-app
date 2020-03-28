import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Tooltip, Snackbar, Fade, IconButton, Collapse } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';

import Slide from '@material-ui/core/Slide'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions/movieActions'

import _ from 'lodash';

const Movie = ({ movie }) => {

    const [favoritesStatus, setFavoritesStatus] = useState(false)

    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(Fade);

    const [expanded, setExpanded] = useState(false);

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.movies.favorites)
    console.log("State of array: favorites:" + favorites)

    // We check every time that the component is mounted if the items are added to localstorage?
    // If it is? Then we show the + icon in grey color. Else transparant color
    useEffect(() => {
        if (movie) {
            checkIconStatus(movie)
        }
    });

    const addFavoriteMovie = (movieObject) => {

        console.log(favorites);

        dispatch(addFavorite(movieObject))
        localStorage.setItem('favorites', JSON.stringify(favorites))

        // Change icon on click
        setFavoritesStatus(true)

    }

    // Check if movieObject is in localstorage and keep the icon to checked if so
    const checkIconStatus = (movieObject) => {
        let favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'));
        if (favoritesLocalStorage) {
            favoritesLocalStorage.forEach(f => {
                if (f.imdbID === movieObject.imdbID) {
                    setFavoritesStatus(true)
                }
            })
        }
    }

    // Remove by ID
    const removeFavoriteMovie = (movieObject) => {

        let favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'));
        let updatedArray = _.remove(favoritesLocalStorage, favorite => favorite.imdbID !== movieObject.imdbID);
        console.log(updatedArray)

        localStorage.setItem('favorites', JSON.stringify(updatedArray));

        dispatch(removeFavorite(movieObject.imdbID));

        // Change icon on click
        setFavoritesStatus(false);

    }

    const SlideTransition = (props) => {
        return <Slide {...props} direction="up" />;
    }

    const handleOpen = Transition => () => {
        setTransition(() => Transition);
        setOpen(true);
        console.log("favoriteStatus:" + favoritesStatus)
        if (!favoritesStatus) { // false
            addFavoriteMovie(movie)
        } else { // true
            removeFavoriteMovie(movie)
        }
        console.log(favoritesStatus)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const useStyles = makeStyles(theme => ({
        root: {
            maxWidth: 345,
        },

        flexContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        flexEndContainer: {
            display: 'flex',
            justifyContent: 'flex-end'
        },

        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }));

    const classes = useStyles();
    return (
        movie ?
            <React.Fragment>

                <Card className={classes.root}>
                    <CardActionArea>


                        <Link to={`movie/${movie.imdbID}`}>
                            {movie.Poster === 'N/A' ? (
                                <CardMedia
                                    component="img"
                                    alt="placeholder_image"
                                    height="250"
                                    image="https://via.placeholder.com/150"
                                    title="Placeholder Image">

                                </CardMedia>
                            ) :
                                (<CardMedia
                                    component="img"
                                    alt="movie_poster"
                                    height="250"
                                    image={movie.Poster}
                                    title="Movie Poster">
                                </CardMedia>
                                )
                            }
                        </Link>

                        <CardContent>

                            {/* Collapse, if title is too long */}
                            {movie.Title.length > 12 ? (
                                <React.Fragment>
                                    <div onClick={handleExpandClick} className={classes.flexContainer}>
                                        <Typography gutterBottom variant="h5" component="h5">{`${movie.Title.slice(0, 5)}...`}</Typography>
                                        <IconButton
                                            style={{ padding: 0 }}
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </div>


                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <Typography gutterBottom variant="h5" component="h5">{movie.Title}</Typography>
                                    </Collapse>
                                </React.Fragment>
                            ) : (
                                    <Typography gutterBottom variant="h5" component="h5">{movie.Title}</Typography>
                                )}

                            <Typography className={classes.flexContainer} variant="body2" color="textSecondary" component="p">
                                {movie.Year}
                                {!favoritesStatus ?

                                    <Tooltip title="Add to favorites" aria-label="add">
                                        {/* false */}
                                        {!favoritesStatus ?
                                            < AddCircleOutlineSharpIcon onClick={handleOpen(SlideTransition)} /> :
                                            < AddCircleIcon onClick={handleOpen(SlideTransition)} />
                                        }
                                    </Tooltip>
                                    :
                                    <Tooltip title="Remove from favorites" aria-label="remove">
                                        {/* false */}
                                        {!favoritesStatus ?
                                            < AddCircleOutlineSharpIcon onClick={handleOpen(SlideTransition)} /> :
                                            < AddCircleIcon onClick={handleOpen(SlideTransition)} />
                                        }
                                    </Tooltip>

                                }

                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* false */}
                {!favoritesStatus ?
                    <Snackbar
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={transition}
                        message="Succesfully removed from favorites !"
                    // TODO: see if this is possible message={`Added To: ${< Link to='/favorites'>"Favorites"</Link>}`}
                    />
                    :
                    <Snackbar
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={transition}
                        message="Succesfully added to favorites !"
                    />
                }

            </React.Fragment>
            : null
    )
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
    addFavorite: PropTypes.func,
    removeFavorite: PropTypes.func
}

export default Movie;
