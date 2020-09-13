import React from 'react'

import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { toggleDarktheme } from '../../redux/actions/themeActions'
import { useSelector, useDispatch } from 'react-redux';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import SideDrawer from '../Utils/SideDrawer'

const Navigation = () => {

    const darktheme = useSelector(state => state.darktheme)
    const dispatch = useDispatch()

    const mobileScreen = useMediaQuery('(max-width: 768px)');

    const toggleDarkthemeClick = () => {
        dispatch(toggleDarktheme())
        console.log(darktheme.darktheme)
    }

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },

        icon: {
            marginRight: theme.spacing(2)
        },

        link: {
            textDecoration: 'none',
            color: '#fff',
            margin: '0 0.3rem',
        },

        hidden: {
            display: 'none'
        },

        title: {
            textDecoration: 'none',
            color: '#fff',
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center'
        }
    }));

    const classes = useStyles();
    return <>
        <div id="back-to-top-anchor" className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar>
                        <Link to="/" className={classes.title}>
                            <LocalMoviesIcon className={classes.icon} />

                            {mobileScreen ? (
                                <Typography>
                                    Movie Search App
                                </Typography>
                            ) : (
                                <Typography variant="h6">
                                    Movie Search App
                                </Typography>
                            )}
                        </Link>
                        {mobileScreen ?
                            <>
                                <Link className={classes.hidden} to="/"><Button color="inherit">Movies</Button></Link>
                                <Link className={classes.hidden} to="/favorites"><Button color="inherit">Favorites</Button></Link>
                                <Link className={classes.hidden} to="/about"><Button color="inherit">About</Button></Link>
                                <Button><Brightness4Icon className={classes.hidden} onClick={toggleDarkthemeClick} /></Button>
                                <SideDrawer />
                            </>
                            :
                            <>
                                <Link className={classes.link} to="/"><Button color="inherit">Movies</Button></Link>
                                <Link className={classes.link} to="/favorites"><Button color="inherit">Favorites</Button></Link>
                                <Button><Brightness4Icon className={classes.link} onClick={toggleDarkthemeClick} /></Button>
                            </>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    </>

}

export default Navigation;