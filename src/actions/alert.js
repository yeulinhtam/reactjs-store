import { ALERT_ADD_CART_SUCCESS, REMOVE_SNACKBAR } from './../contants/alertContants';

export const alertProductCartSuccess = () => {
    return {
        type: ALERT_ADD_CART_SUCCESS,
    }
}

export const removeSnackbar = () => {
    return {
        type: REMOVE_SNACKBAR
    }
}