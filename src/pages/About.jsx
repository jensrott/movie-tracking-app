import React from 'react'
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, makeStyles, Paper, Container } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const About = () => {
    const useStyles = makeStyles({
        root: {
            padding: '1.5rem',
            margin: '2rem 0'
        },

        title: {
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1rem'
        },
    });

    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Paper className={classes.root}>
                    <Typography className={classes.title} variant="h3" gutterBottom>
                        About
                </Typography>
                </Paper>
                <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" >What is it?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                This app uses the <a style={{ fontWeight: 'bold' }} href="http://www.omdbapi.com/" rel="noopener noreffer" target="_blank">OMDb API</a> to fetch movie/series data.
                                You can view details about a movie and add movies/series to your favorite list. Your favorites are
                                saved in LocalStorage.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" >Technologies used</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <li>React</li>
                                <li>React Router</li>
                                <li>React Hooks</li>
                                <li>Material-UI React</li>
                                <li>Redux</li>
                                <li>Lodash</li>
                                <li>Axios</li>
                                <li>Localstorage</li>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" >Made by</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <a style={{ textDecoration: 'none', color: '#3f51b5' }} href="https://github.com/jensrott" rel="noopener noreffer" target="_blank"> Jens Rottiers</a>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" >Version</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                1.0
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default About
