import React from 'react';
import {
    Button,
    CardActions,
    Box,
    Card,
    CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';


ProductCardSkeleton.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        borderRadius: 5,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    cardMediaContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    cardMedia: {
        height: 220,
        width: 220,
        textAlign: "center"
    },
    cardPrice: {
        color: 'red'
    }
}));

function ProductCardSkeleton() {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer}>
            <Box className={classes.cardMediaContainer}>
                <Skeleton animation="wave" variant="rect" className={classes.cardMedia} />
            </Box>
            <CardContent>
                <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" disabled={true}>Add Cart</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCardSkeleton;