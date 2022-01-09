import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import cart from '../assets/cart.png'
import IconButton from '@material-ui/core/IconButton';
import images from '../assets/images.png'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


import {
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
        padding: 0
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function HeaderAppBar() {
    const history = useHistory()
    const product = useSelector(state => {
        return state.filter(item => item?.parnier == true)
    })

    console.log("Product", product)
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/">

                            <img src={images} style={{ Width: 45, height: 45 }} />
                        </Link>
                    </IconButton>
                    <Typography variant="h6" className={classes.title} />

                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '2%' }} onClick={() => history.push('/commandes')} >
                        <div >
                            <img src={cart} style={{ width: 30, height: 30 }} />

                        </div>
                        <p style={{ position: 'absolute', top: -8, right: 15, fontWeight: 'bold', padding: 5, fontSize: 15 }}>{`${product.length}`}</p>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
