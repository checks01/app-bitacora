import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core'
import SelectionGrid from './SelectionGrid'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarShift2: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

export default function BINF003({ open }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <main className={clsx(classes.content, open && classes.appBarShift2)}>
                <div className={clsx(classes.appBarSpacer, open && classes.appBarShift2)} />
                <Container maxWidth="lg" className={clsx(classes.container, open && classes.appBarShift2)} >
                    <Grid container spacing={3} alignItems='flex-end'>
                        <Grid item xs={12}>
                            <SelectionGrid> </SelectionGrid> 
                        </Grid>
                        <Grid item alignItems='flex-end'>
                            <SelectionGrid> </SelectionGrid>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div>
    );
}