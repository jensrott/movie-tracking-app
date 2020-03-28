import React, { useState, useEffect } from 'react'

import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Error from '../components/Utils/Error';
import Spinner from '../components/Utils/Spinner';

import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useDispatch } from 'react-redux';

const MovieDetail = (props) => {

    const [movie, setMovie] = useState({})

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const addFavorite = (movieObject) => {


        console.log(movieObject);

        dispatch(addFavorite(movieObject))
        localStorage.setItem('favorites', JSON.stringify(movieObject))

    }

    const addFavoriteTest = () => {
        addFavorite(movie)
    }

    const useStyles = makeStyles(({
        root: {
            padding: '1.5rem',
            margin: '2rem 0'
        },

        flexContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        centerContainer: {
            display: 'flex',
            justifyContent: 'center'
        },

        linkStyle: {
            textDecoration: 'none',
            marginBottom: '1rem'
        },

        imdbBtn: {
            backgroundColor: '#f5c518',
            '&:hover': {
                backgroundColor: '#80670e',
            },
        },

        youtubeBtn: {
            backgroundColor: '#ff0000',
            '&:hover': {
                backgroundColor: '#850000',
            },
        }
    }));

    useEffect(() => {
        console.log(props);
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_URL = `http://www.omdbapi.com`
        const movieId = props.match.params.id;
        setIsLoading(true)
        axios.get(`${API_URL}/?i=${movieId}&apikey=${API_KEY}`)
            .then(data => {
                setIsLoading(false)
                console.log(data)
                setMovie(data.data);
            }).catch(err => {
                console.log(err)
                setError(err)
            })
    }, [props])

    const classes = useStyles();
    return (
        <React.Fragment>
            {movie ? (
                <Container maxWidth="sm">
                    <Paper className={classes.root}>
                        <Grid wrap="wrap-reverse" container spacing={3}>
                            <Grid item xs={12} sm={8}>

                                {movie.Poster === 'N/A' ? (
                                    <img
                                        alt="placeholder_image"
                                        src="https://via.placeholder.com/150">

                                    </img>
                                ) :
                                    (<img
                                        src={movie.Poster}
                                        alt="movie_poster">
                                    </img>
                                    )
                                }

                                <div>
                                    <p style={{ marginBottom: '1.5rem' }}> Plot: {movie.Plot}</p>
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div>

                                    <Typography gutterBottom variant="h4" component="h4">{movie.Title}</Typography>
                                    <p>Genre: {movie.Genre}</p>
                                    <p>Released: {movie.Released}</p>
                                    <p>Rated: {movie.Rated}</p>
                                    <p>IMDB Rating: {movie.imdbRating}</p>
                                    <p>Director: {movie.Director}</p>
                                    <p>Writer: {movie.Writer}</p>
                                    <p>Actors: {movie.Actors}</p>
                                </div>

                            </Grid>


                        </Grid>
                        <div className={classes.flexContainer} style={{ marginBottom: '1rem' }}>
                            <a className={classes.linkStyle} href={`http://imdb.com/title/${movie.imdbID}`} rel="noopener noreffer" target="_blank">
                                <Button className={classes.imdbBtn} variant="contained" color="secondary">IMDB</Button>
                            </a>
                            <a className={classes.linkStyle} href={`https://www.youtube.com/results?search_query=${movie.Title}`} rel="noopener noreffer" target="_blank">
                                <Button className={classes.youtubeBtn} variant="contained" color="secondary">Youtube</Button>
                            </a>
                        </div>
                        <div className={classes.centerContainer}>
                            <Link className={classes.linkStyle} style={{ width: '100%', display: 'flex', alignItems: 'center' }} to='/'>
                                <Button style={{ width: '100%' }} variant="contained" color="primary"><HomeIcon /></Button>
                            </Link>
                        </div>

                    </Paper>
                </Container>
            ) : null
            }

            <Spinner loading={isLoading} />
            <Error errorMessage={error} />

        </React.Fragment >

    )
}

export default MovieDetail
