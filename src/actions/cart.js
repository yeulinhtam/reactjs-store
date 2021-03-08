import {
    ADD_PRODUCT_CART,
    SUB_PRODUCT_CART,
    DELETE_PRODUCT_CART
} from './../contants/cartContants';


export const addProductCart = (product, quantity) => {
    return {
        type: ADD_PRODUCT_CART,
        payload: {
            product,
            quantity
        }
    }
}

export const subProductCart = (product, quantity) => {
    return {
        type: SUB_PRODUCT_CART,
        payload: {
            product,
            quantity
        }
    }
}

export const deleteProductCart = (product) => {
    return{
        type: DELETE_PRODUCT_CART,
        payload: {
            product
        }
    }
}