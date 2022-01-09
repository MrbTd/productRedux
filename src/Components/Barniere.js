import { CssBaseline, Grid, makeStyles, Typography, useMediaQuery } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React, { useState } from 'react'

const Barniere = ({ url = "https://source.unsplash.com/random", test = true, title }) => {
    const [verif, setVerif] = useState(false)
    const useStyles = makeStyles(theme => ({

        image: {
            height: 400,
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',

        },
        typograph: {
            backgroundColor: 'red',
            fontSize: 30,
            [theme.breakpoints.up("md")]: {
                fontSize: 60
            },
        }
    }))
    const classes = useStyles()
    return (
        <Grid container className={classes.image}>
            <CssBaseline />
            <Typography variant="h2" component="h2" className={classes.typograph} onMouseOver={() => setVerif(true)} onMouseOut={() => setVerif(false)}>
                {test ? verif ? "Oui désirons quelque chose" : "                Vous désirez quelque chose ?" : title}
            </Typography>
        </Grid>
    )
}

export default Barniere
