import React from 'react';
import { makeStyles, TableRow, TableCell, CardMedia, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import { priceRow } from '../../utils/cart';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { addProductCart, subProductCart, deleteProductCart } from './../../actions/cart';



const useStyles = makeStyles({
    table: {
        marginTop: 50,
        marginBottom: 100,
        minWidth: 640
    },
    cardMedia: {
        height: 80,
        width: 80
    },
    button: {
        minWidth: 25,
        marginLeft: 7,
        marginRight: 7
    }
})

const CartButton = withStyles({
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

function CartItem(props) {

    const { product, quantity, index } = props;
    const classes = useStyles();

    const dispatch = useDispatch();

    const onAddCart = (product) => {
        const action = addProductCart(product, 1);
        dispatch(action);
    }

    const onSubCart = (product) => {
        const action = subProductCart(product, -1);
        dispatch(action);
    }

    const deleteCart = (product) => {
        const action = deleteProductCart(product);
        dispatch(action);
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">{index + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>
                <CardMedia
                    className={classes.cardMedia}
                    image={`http://localhost:4000/uploads/${product.image}` || null}
                    title={product.name}>
                </CardMedia>
            </TableCell>
            <TableCell>{product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</TableCell>
            <TableCell>
                <CartButton size="small"
                    variant="text"
                    startIcon={<RemoveIcon />}
                    className={classes.button}
                    onClick={() => onSubCart(product)}
                />
                {quantity}
                <CartButton size="small"
                    variant="text"
                    startIcon={<AddIcon />}
                    className={classes.button}
                    onClick={() => onAddCart(product)}
                />
            </TableCell>
            <TableCell>{priceRow(product.price, quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</TableCell>
            <TableCell>
                <CartButton startIcon={<ClearIcon />} onClick={() => deleteCart(product)}></CartButton>
            </TableCell>
        </TableRow>
    );
}

export default CartItem;