import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import BINF001 from './../../routes/BINF001/BINF001';
import BINF002 from './../../routes/BINF002/BINF002';
import BINF003 from './../../routes/BINF003/BINF003';
import BINF004 from './../../routes/BINF004/BINF004';
import BINF005 from './../../routes/BINF005/BINF005';
import BINF006 from './../../routes/BINF006/BINF006';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        '-webkit-flex': 1,
        '-ms-flex': 1,
        flex: 0.3,
        backgroundColor: theme.palette.background.orange,
        background: '#ffa040',
        position: 'relative',
        overflow: 'auto',
        maxHeight: '100%',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    logo: {
        maxWidth: '75%',
        height: 'auto'
    }
}));

export default function PanelFunciones({ open, fnExpandeColapsaMenu, fnSetFuncion }) {
    const classes = useStyles();
    const theme = useTheme();
    const funciones = [
        { cveFuncion: 'BINF001', descripcion: 'Valida scripts' },
        { cveFuncion: 'BINF002', descripcion: 'Carga paquete' },
        { cveFuncion: 'BINF003', descripcion: 'Seguimiento de paquetes' },
        { cveFuncion: 'BINF004', descripcion: 'Consulta bitacora' },
        { cveFuncion: 'BINF005', descripcion: 'Mantenimiento pipeline' },
        { cveFuncion: 'BINF006', descripcion: 'Reportes' },
    ];

    const handleDrawerClose = () => {
        fnExpandeColapsaMenu(false);
    };

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index, cveFuncion) => {
        setSelectedIndex(index);
        console.log(cveFuncion);
        switch (cveFuncion) {
            case "BINF001":
                fnSetFuncion(<BINF001 />);
                break;
            case "BINF002":
                fnSetFuncion(<BINF002 />);
                break;
            case "BINF003":
                fnSetFuncion(<BINF003 />);
                break;
            case "BINF004":
                fnSetFuncion(<BINF004 />);
                break;
            case "BINF005":
                fnSetFuncion(<BINF005 />);
                break;
            case "BINF006":
                fnSetFuncion(<BINF006 />);
                break;
            default:
                fnSetFuncion(null);
                break;
        }
        fnExpandeColapsaMenu(true);
    };

    const [valor, expandCollapse] = React.useState(true);
    const handleClick = () => {
        expandCollapse(!valor);
    };



    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <img className={classes.logo} src="https://www.lobos.com.mx/wp-content/themes/lobos/images/lobo-software-logo.png" />
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>

            <Divider />

            <List subheader={<li />}>
                {[0].map(sectionId => (
                    <li key={`section-${sectionId}`}>
                        <ul>
                            <ListSubheader component="div" id="nested-list-subheader">
                                SIAL
                            </ListSubheader>

                            <ListItem button onClick={handleClick}>
                                <ListItemText secondary="BITACORA" />
                                {valor ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>

                            <Collapse in={valor} timeout="auto" unmountOnExit>
                                {funciones.map((item, index) => (

                                    <ListItem key={`item-${item.cveFuncion}`}
                                        selected={selectedIndex === index}
                                        onClick={event => handleListItemClick(event, index, item.cveFuncion)}
                                    >
                                        <ListItemText primary={`${item.cveFuncion} - ${item.descripcion}`} />
                                    </ListItem>
                                ))}
                            </Collapse>

                        </ul>
                    </li>
                ))}
            </List>
        </Drawer>
    );
}
