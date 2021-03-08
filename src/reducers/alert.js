import { ALERT_ADD_CART_SUCCESS, REMOVE_SNACKBAR } from './../contants/alertContants';
const initialState = {
    open: false,
    message: '',
    level: ''
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALERT_ADD_CART_SUCCESS:
            return {
                ...state,
                open: true,
                message: 'Product successfully added to your cart!',
                level: 'success'
            };
        case REMOVE_SNACKBAR: 
            return {
                ...state,
                open: false
            }    

        default:
            return state;
    }
}

export default alertReducer;