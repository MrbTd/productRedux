import { makeStyles } from '@material-ui/styles'
import React from 'react'

const ErrorPage = () => {
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontWeight: 'bold',
            fontSize: 30
        }
    })
    const classes = useStyles()
    return (
        <div className={classes.root}>
            ErrorPage
            ErrorPage ?
        </div>
    )
}

export default ErrorPage
