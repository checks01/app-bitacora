import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    appBarShift: {
        width: '100%',
        marginLeft: 120,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    }
}));

export default function PanelPantalla({ open, funcion }) {
    const classes = useStyles();
    return (
        <div id='divRoot' className={clsx(classes.root, open && classes.appBarShift)}>
            <main id='mainContent' className={clsx(classes.content, open && classes.appBarShift)}>
                <div id= 'divAppBarSpacer' className={classes.appBarSpacer} />
                <Container id= 'containerPantalla' className={clsx(classes.container, open)} >
                    {funcion}
                </Container>
            </main>
        </div>
    );
}