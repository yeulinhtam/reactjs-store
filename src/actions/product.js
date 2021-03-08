import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_ERROR
} from './../contants/productContants';
import productApi from './../api/productApi';

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
}


export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error
    }
}



export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export const fetchProductError = (error) => {
    return {
        type: FETCH_PRODUCT_ERROR,
        payload: error
    }
}


export const detailsProduct = (id) => {
    return dispatch => {
        dispatch(fetchProductRequest());
        productApi.getProductId(id)
            .then(res => {
                dispatch(fetchProductSuccess(res.data));
            }).catch(error => {
                dispatch(fetchProductError(error));
            })
    }
};