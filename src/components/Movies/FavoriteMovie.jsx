import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

import { Card, CardActionArea, CardMedia, CardContent, Typography, Tooltip, Snackbar, Slide, Fade, IconButton, Collapse } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';

import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../redux/actions/movieActions'

import _ from 'lodash';

const FavoriteMovie = ({ favorite }) => {
    console.log(favorite)

    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(Fade);

    const [expanded, setExpanded] = useState(false);

    const dispatch = useDispatch();

    const removeFavoriteMovie = (movieId) => {

        let favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'));
        let updatedArray = _.remove(favoritesLocalStorage, favorite => favorite.imdbID !== movieId);
        console.log(updatedArray)

        localStorage.setItem('favorites', JSON.stringify(updatedArray));

        dispatch(removeFavorite(movieId));
    }

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },

        flexContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    });

    const SlideTransition = (props) => {
        return <Slide {...props} direction="up" />;
    }

    const handleOpen = Transition => () => {
        setTransition(() => Transition);
        setOpen(true);
        removeFavoriteMovie(favorite.imdbID)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();
    return (
        favorite ?
            <React.Fragment>

                <Card className={classes.root}>
                    <CardActionArea>


                        <Link to={`movie/${favorite.imdbID}`}>
                            {favorite.Poster === 'N/A' ? (
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
                                    image={favorite.Poster}
                                    title="Movie Poster">
                                </CardMedia>
                                )
                            }
                        </Link>

                        <CardContent>
                            {/* Collapse, if title is too long */}
                            {/* Put this in seperate menu: <Collapse> menu */}
                            {favorite.Title.length > 12 ? (
                                <React.Fragment>
                                    <div onClick={handleExpandClick} className={classes.flexContainer}>
                                        <Typography gutterBottom variant="h5" component="h5">{`${favorite.Title.slice(0, 5)}...`}</Typography>
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
                                        <Typography gutterBottom variant="h5" component="h5">{favorite.Title}</Typography>
                                    </Collapse>
                                </React.Fragment>
                            ) : (
                                    <Typography gutterBottom variant="h5" component="h5">{favorite.Title}</Typography>
                                )}
                            <Typography className={classes.flexContainer} variant="body2" color="textSecondary" component="p">
                                {favorite.Year}
                                <Tooltip title="Remove from favorites" aria-label="add">
                                    <DeleteIcon onClick={handleOpen(SlideTransition)} />
                                </Tooltip>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                <Snackbar
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={transition}
                    message="Succesfully removed from favorites !"
                />
            </React.Fragment>
            : null
    )
}

FavoriteMovie.propTypes = {
    favorite: PropTypes.object,
    removeFavoriteMovie: PropTypes.func
}

export default FavoriteMovie
