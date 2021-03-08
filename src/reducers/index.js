import { combineReducers } from 'redux';
import productReducer from './product';
import productsReducer from './products';
import cartReducer from "./cart";
import alerReducer from './alert';
import userReducer from './user';
import commentReducer from './comment';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    alert: alerReducer,
    user: userReducer,
    product: productsReducer,
    comments: commentReducer

});

export default rootReducer;