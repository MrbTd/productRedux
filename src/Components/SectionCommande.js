import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'
import { Link } from "react-router-dom";

import { Card, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        minWidth: 275,
        marginTop: 20,
        marginRight: 10
    },

}));



export const itemData = [
    {
        img: "https://zipfilesbucket1.s3.us-east-2.amazonaws.com/GKZ_WV.jpg",
        title: 'Se nourir',
        author: 'nourir',
    },
    {
        img: " https://zipfilesbucket1.s3.us-east-2.amazonaws.com/PHOTO_TLD_QM.jpg",
        title: 'Bien etre',
        author: 'bien',
    },
    {
        img: "https://app-zip.com/assets/images/package-landing-image.png",
        title: 'Collect',
        author: 'collecte',
    },
];

export default function SectionCommande() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            {itemData.map((item) => (
                <Card className={`img-hover-zoom--colorize ${classes.root}`} variant="outlined" key={item.author}>
                    <Link to={`/${item.author}`}>
                        <img src={item.img} alt="" style={{ width: 200, height: 139 }} />
                    </Link>
                    <p style={{ color: 'orange', fontWeight: 'bold' }}>{item.title}</p>
                </Card>
            ))}
            <Hidden xsDown>
                <p style={{ position: 'absolute', bottom: 0, fontWeight: 'bold' }}>Copyright &copy; MrbTd {new Date().getFullYear()}</p>
            </Hidden>
        </div>
    );
}

