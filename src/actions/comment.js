import {
    POST_COMMENT_ERROR,
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR,
    RESET_FORM_COMMENT
} from './../contants/commentContants';

export const postCommentRequest = () => {
    return {
        type: POST_COMMENT_REQUEST
    }
}

export const postCommentSuccess = (data) => {
    return {
        type: POST_COMMENT_SUCCESS,
        payload: data
    }
}

export const postCommentError = (error) => {
    return {
        type: POST_COMMENT_ERROR,
        payload: error
    }
}


export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}


export const fetchCommentsSuccess = (data) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: data
    }
}

export const fetchCommentsError = (error) => {
    return {
        type: FETCH_COMMENTS_ERROR,
        payload: error
    }
}


export const resetFormComment = () => {
    return {
        type: RESET_FORM_COMMENT
    }
}