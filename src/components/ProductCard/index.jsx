import React from 'react';
import {
    Button,
    CardActions,
    Link,
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../actions/cart';
import { alertProductCartSuccess } from '../../actions/alert';
import Skeleton from '@material-ui/lab/Skeleton';

ProductCard.propTypes = {

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

function ProductCard(props) {

    const classes = useStyles();
    const { product, loading } = props;

    const dispatch = useDispatch();

    const onAddCart = (product) => {
        const action = addProductCart(product, 1);
        const alertAction = alertProductCartSuccess();
        dispatch(action);
        dispatch(alertAction);
    }

    return (

        <Card className={classes.cardContainer}>
            <Box className={classes.cardMediaContainer}>
                {
                    loading ? (
                        <Skeleton animation="wave" variant="rect" className={classes.cardMedia} />
                    ) : (
                            <CardMedia
                                className={classes.cardMedia}
                                title={product.name}
                                image={`http://localhost:4000/uploads/${product.image}` || null}
                            />
                        )
                }
            </Box>
            <CardContent>
                {
                    loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <Typography color="textPrimary">
                                    <Link component={RouterLink} to={`/product/${product.slug}`}>{product.name}</Link></Typography>
                                <Typography color="secondary">{product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</Typography>
                                <Rating value={product.rating} size="small" readOnly />
                            </React.Fragment>
                        )
                }
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" disabled={loading} onClick={() => onAddCart(product)}>Add Cart</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;