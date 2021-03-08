import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import CartItem from './CartItem';
import { totalPrice, totalQty } from './../../utils/cart';
import { Link as RouterLink } from 'react-router-dom';


Cart.propTypes = {

};


const useStyles = makeStyles({

    emptyContainer: {
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 10,
        boxShadow: '0 1px 6px #efe9f2',
        padding: '50px 30px 40px 30px',
        backgroundColor: 'rgba(255,255,255,255)'
    },
    emptyTitle: {
        display: 'flex',
        justifyContent: 'center'
    },
    table: {
        marginTop: 50,
        marginBottom: 100,
        minWidth: 640
    }
})



function Cart(props) {

    const classes = useStyles();
    const { cart } = props;

    if (cart.length > 0) {
        return (
            <Container maxWidth='lg'>
                <TableContainer component={Paper} className={classes.table}>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((item, index) => (
                                <CartItem key={index} product={item.product} quantity={item.quantity} index={index} />
                            ))}
                            <TableRow>
                                <TableCell rowSpan={3} colSpan={4} />
                                <TableCell colSpan={1}>Quantity:</TableCell>
                                <TableCell>{totalQty(cart)}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={1}>Total:</TableCell>
                                <TableCell>{totalPrice(cart).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={1} align="right">
                                    <Button color="primary" variant="contained" component={RouterLink} to="/" startIcon={<ShoppingCartIcon />}>Continue Shopping</Button>
                                </TableCell>
                                <TableCell>
                                    <Button color="secondary" variant="contained" startIcon={<PaymentIcon />}>CheckOut</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        );
    }

    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <Grid container className={classes.emptyContainer} spacing={6}>
                    <Grid item xs={12} className={classes.emptyTitle}>
                        <Typography variant='h6'>Giỏ hàng trống!</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.emptyTitle}>
                        <Button variant='contained' color='secondary'  startIcon={<ShoppingCartIcon />} component={RouterLink} to="/">Tiếp tục mua hàng</Button>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Cart;