import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './../components/Cart';

function CartPage(props) {

    const cart = useSelector(state => state.cart.items);

    return (
        <React.Fragment>
            <Cart cart={cart}/>
        </React.Fragment>
    );
}

export default CartPage;