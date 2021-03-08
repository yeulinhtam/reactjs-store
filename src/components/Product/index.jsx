import React, { useState } from 'react';
import { Card, Container, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Comment from './Comment';
import CommentItem from './ComentItem';
import CardMedia from '@material-ui/core/CardMedia';
import { addProductCart } from '../../actions/cart';
import { alertProductCartSuccess } from '../../actions/alert';
import { useDispatch } from 'react-redux';
Product.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 50,
        background: "#fff",
        width: '100%'
    },
    cardRoot: {
        boxShadow: "none",
        maxWidth: 400
    },
    cardMedia: {
        height: 0,
        textAlign: "center"
    },
    chip: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
    },
    cartContainer: {
        marginTop: theme.spacing(3),
    },

    marginBtn: {
        margin: 5
    },
    qtyText: {
        margin: 5,
        minWidth: 20,
        textAlign: 'center'
    },
    btnAddCart: {
        marginTop: theme.spacing(1),
        height: 45,
        width: 180,
        fontSize: 24,
        display: 'flex'
    },
    input: {
        padding: 0,
        width: 20
    }
}))

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 5px',
        minWidth: 35,
        lineHeight: 1,
        color: '#212529',
        backgroundColor: 'f8f9fa',
        borderColor: 'f8f9fa',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: 'f8f9fa',
            borderColor: 'f8f9fa',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: 'f8f9fa',
            borderColor: 'f8f9fa',
        },
        '&:focus': {
            // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },

    },
    startIcon: {
        display: 'inherit',
        margin: 0
    },
})(Button);




function Product(props) {

    const classes = useStyles();

    const dispatch = useDispatch();
    const { product, comments } = props;

    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (qty) => {
        setQuantity(quantity + qty);
    }   


    const addToCart = (product, qty) => {
        dispatch(addProductCart(product, qty));
        dispatch(alertProductCartSuccess());
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={0} className={classes.root}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="auto"
                                image={`http://localhost:4000/uploads/${product.image}` || null}
                                title="Contemplative Reptile"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.cardRoot}>
                            <Typography variant="h5" component="h5">MOBILE</Typography>
                            <Typography variant="h4" component="h2">{product.name}</Typography>
                            <Rating value={product.rating || 0} size="small" readOnly />
                            <Typography color="secondary">{product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</Typography>
                            <div className={classes.cartContainer}>
                                <Typography variant="body2" component="h3">Số lượng:</Typography>
                                <div className={classes.btnAddCart}>
                                    <BootstrapButton
                                        variant="outlined"
                                        onClick={() => handleChangeQuantity(-1)}
                                        disabled={!quantity}
                                        startIcon={<RemoveIcon />}
                                        disableRipple className={classes.marginBtn}>
                                    </BootstrapButton>
                                    <Typography className={classes.qtyText} variant="h6">{quantity}</Typography>
                                    <BootstrapButton
                                        variant="outlined"
                                        onClick={() => handleChangeQuantity(1)}
                                        startIcon={<AddIcon />}
                                        disableRipple className={classes.marginBtn}>
                                    </BootstrapButton>
                                </div>
                                <div>
                                    <Button 
                                        variant="contained"
                                        color="secondary"
                                        disabled={!quantity}
                                        onClick={() => addToCart(product, quantity)}
                                        className={classes.btnAddCart}>
                                            MUA NGAY
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Comment product={product} />
                {
                    comments && comments.map((comment, index) => {
                        return (<CommentItem key={comment._id} comment={comment} />)
                    })
                }
            </Container>
        </React.Fragment>
    );
}

export default Product;