import React from 'react';
import { Typography, Grid, Container, makeStyles, Link, InputBase } from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CameraIcon from '@material-ui/icons/Camera';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        padding: 10,
        borderTop: `1px solid ${theme.palette.divider}`,
    },
    title: {
        marginBottom: 15
    },
    link: {
        marginTop: 5,
        marginBottom: 5
    },
    iconContainer: {
        display: 'flex',
        width: 200,
        justifyContent: 'space-between',
        
    }
}));


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid rgb(236, 236, 236)',
        fontSize: 16,
        width: '300px',
        padding: '7px 9px',
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create(['border-color', 'box-shadow'])
    },
}))(InputBase);

function Footer(props) {

    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid container className={classes.root} spacing={3}>
                <Grid item lg={3} xs={6}>
                    <Typography className={classes.title} variant="h6" component="h4">COMPANY</Typography>
                    <Typography className={classes.link}>
                        <Link href="#">About us</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Contact us</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Pricavy Policy</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Term & Conditions</Link>
                    </Typography>
                </Grid>
                <Grid item lg={3} xs={6}>
                    <Typography className={classes.title} variant="h6" component="h4">MY ACCOUNT</Typography>
                    <Typography className={classes.link}>
                        <Link href="#">My Account/Register</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">View Cart</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Order Status</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Site Map</Link>
                    </Typography>
                </Grid>
                <Grid item lg={3} xs={6}>
                    <Typography className={classes.title} variant="h6" component="h4">QUICK LINKS</Typography>
                    <Typography className={classes.link}>
                        <Link href="#">All Products</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Site Helps</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Shipping Info</Link>
                    </Typography>
                    <Typography className={classes.link}>
                        <Link href="#">Returns</Link>
                    </Typography>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <Typography className={classes.title} variant="h6" component="h4">NEWSLETTER SIGN UP</Typography>
                    <BootstrapInput id="bootstrap-input" label="Email address" placeholder="Email address" />
                    <Typography className={classes.title} variant="h6" component="h4">STAY CONNECT</Typography>
                    <div className={classes.iconContainer}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <CameraIcon />
                        <RssFeedIcon />
                        <GitHubIcon />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;