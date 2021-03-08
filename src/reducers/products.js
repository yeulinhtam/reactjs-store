import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } from './../contants/productContants';

const initialState = {
    data: [],
    loading: true,
    pagination: {
        page: 1,
        limit: 8,
        total: 1
    }
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
}

export default productsReducer;