import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_ERROR,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR,
    RESET_FORM_COMMENT
} from './../contants/commentContants';

const initialState = {
    data: [],
    loading: false,
    success: false
}

const commentReducer = (state = initialState, action) => {
    let comments = [];
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_COMMENTS_SUCCESS:
            comments = action.payload;
            return {
                ...state,
                data: comments.reverse(),
                loading: false,
            }
        case FETCH_COMMENTS_ERROR:
            return {
                ...state,
                loading: false
            }
        case POST_COMMENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_COMMENT_SUCCESS: 
            comments = [...state.data];
            comments.push(action.payload);
            return {
                ...state,
                data: comments.reverse(),
                loading: false,
                success: true
            }
        case POST_COMMENT_ERROR:
            return {
                ...state,
                loading: false
            }
        case RESET_FORM_COMMENT: 
            return {
                ...state,
                success: false
            }
        default: return state;
    }
}

export default commentReducer;