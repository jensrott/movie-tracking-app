import React, { useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { toggleDarktheme } from '../../redux/actions/themeActions'
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';


const SideDrawer = () => {

    const [state, setState] = useState(false);

    const [checked, setChecked] = useState(false);


    const toggleDrawer = (anchor, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const toggleChecked = () => {
        setChecked(checked => !checked);
    };

    const darktheme = useSelector(state => state.darktheme)
    const dispatch = useDispatch()

    const setDarkTheme = () => {
        dispatch(toggleDarktheme())
        console.log(darktheme.darktheme)
    }

    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        link: {
            textDecoration: 'none',
            color: '#000',
            margin: '0 0.3rem',
        },
        hamburger: {
            color: '#fff',
            fontSize: '32px',
        }
    });
    const classes = useStyles()

    const createList = anchor => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Movies'} />
                    </ListItem>
                </Link>
                <Link to="/favorites" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Favorites'} />
                    </ListItem>
                </Link>
                <Link to="/about" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary={'About'} />
                    </ListItem>
                </Link>

                <ListItem onClick={setDarkTheme} button>
                    <FormControlLabel
                        control={<Switch color="primary" checked={checked} onChange={toggleChecked} />}
                        label="Dark Mode"
                    />
                </ListItem>

            </List>
        </div>
    )

    const anchor = 'right'; // Direction where the sidebar goes from
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon
                    className={classes.hamburger}
                />
            </Button>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                disableBackdropTransition={!iOS} disableDiscovery={iOS}
            >
                {createList(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default SideDrawer
