import React, { useState } from 'react'

import axios from 'axios'

import TextField from '@material-ui/core/TextField';
import MoviesList from '../components/Movies/MoviesList';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, Fab } from '@material-ui/core';

import Error from '../components/Utils/Error';
import Spinner from '../components/Utils/Spinner';
import ScrollTopButton from '../components/Utils/ScrollTopButton';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const Home = (props) => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // TODO: pagination
    // const [pages, setPages] = useState(1)

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

        spinner: {
            textAlign: 'center'
        },
    }))

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_URL = `http://www.omdbapi.com`
        setIsLoading(true)
        setError('')
        if (searchTerm === '') {
            setIsLoading(false);
            return false;
        }

        // `${API_URL}/?s=${searchTerm}&apikey=${API_KEY}&page=${pages}`
        axios.get(`${API_URL}/?s=${searchTerm}&apikey=${API_KEY}`)
            .then(data => {
                console.log(data)
                setIsLoading(false)
                setMovies(data.data.Search)
                setError('')
                if (data.data.Error === "Too many results.") {
                    const errorMsg = 'Enter a movie or serie!'
                    setError(errorMsg)
                } else if (data.data.Error) {
                    setError(data.data.Error)
                }
            }).catch(err => {
                console.log(err)
                setError(err)
            })
    }

    const setRandomPlaceholder = () => {
        let heroes = ["Batman", "Joker", "Spider-man", "Superman", "Wolverine", "Iron Man", "Deadpool"];
        let hero = heroes[Math.floor(Math.random() * heroes.length)];
        return `e.g. ${hero}`;
    }

    // For later
    // const loadMovies = () => {

    // }

    // const loadMoreCards = () => {
    //     setTimeout(() => {

    //     }, 1500)
    // }

    const classes = useStyles();
    return (

        <React.Fragment>
            <Container maxWidth="sm">

                <form onSubmit={handleSubmit}>
                    <Paper className={classes.root}>
                        <Typography variant="h3" className={classes.title}>Movie Tracker</Typography>
                        <TextField
                            label="Enter movie or TV show here"
                            fullWidth={true}
                            value={searchTerm}
                            onChange={handleChange}
                            placeholder={setRandomPlaceholder()}
                            inputProps={{ pattern: "[a-zA-Z0-9- ]+" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Paper>
                </form>

                <Spinner loading={isLoading} />
                <MoviesList movies={movies} />
                <Error errorMessage={error} />

                <ScrollTopButton {...props}>
                    <Fab color="primary" size="medium" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTopButton>

            </Container>
        </React.Fragment>
    )
}

export default Home
