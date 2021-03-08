import productApi from './../api/productApi';
import { fetchProductsError, fetchProductsRequest, fetchProductsSuccess } from './product';


export function fetchProducts(params){
    return dispatch => {
        dispatch(fetchProductsRequest());
        productApi.getAll(params)
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
            }).catch(error => {
                dispatch(fetchProductsError(error))
            });
    }
}
