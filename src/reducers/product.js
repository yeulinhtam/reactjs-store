import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './../contants/productContants';

const initialState = {
    list: [],
    loading: false,
    pagination: {
        page: 1,
        limit: 8,
        total: 1
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PRODUCTS_SUCCESS:
            const newPagination = {
                page: action.payload.page,
                limit: action.payload.limit,
                total: action.payload.total,
            }
            return {
                ...state,
                loading: false,
                list: action.payload.data,
                pagination: newPagination
            };

        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false
            };

        default: return state;
    }
}

export default productReducer;