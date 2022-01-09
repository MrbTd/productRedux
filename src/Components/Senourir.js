import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Barniere from './Barniere'
import HeaderAppBar from './Header'
import cart from '../assets/cart.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";


import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { ProductActionParnier } from '../redux/Actions/ProductAction'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Senourir = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const itemData = useSelector(state => state)
    const useStyles = makeStyles({
        alignText: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: -10,
            marginRight: 30
        }
    })
    const classes = useStyles()

    const handleClick = (id) => {
        setOpen(true)
        dispatch(ProductActionParnier(id))
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <HeaderAppBar />
            <Barniere url="https://zipfilesbucket1.s3.us-east-2.amazonaws.com/KNZ_JE.jpg"
                test={false}
                title="Retrouvez tous vos
                plats africains"
            />
            <Container maxWidth="lg">

                <Grid container
                    style={{ justifyContent: 'center' }}
                >
                    {itemData.map(item => (
                        <Grid item md={3} key={item.id}>
                            <img src={`https://zipfilesbucket1.s3.us-east-2.amazonaws.com/${item.urlPhoto}`} className='lmj-logo' style={{ width: 300, height: 200, borderRadius: 3, marginTop: 10 }} />
                            <div className={classes.alignText}>
                                <h4>{item.nom}</h4>
                                <img src={cart} alt="" style={{ width: 25, height: 25 }} onClick={() => handleClick(item.id)} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    produit ajoute au parnier!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Senourir
