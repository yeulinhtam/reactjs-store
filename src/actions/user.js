import {
    USER_LOGIN_REQUEST,
    USER_SIGN_UP_ERROR,
    USER_SIGN_UP_REQUEST,
    USER_SIGN_UP_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_UPLOAD_REQUEST,
    USER_UPLOAD_SUCCESS,
    USER_UPLOAD_ERROR
} from './../contants/userContants';

export const userSignUpRequest = (data) => {
    return {
        type: USER_SIGN_UP_REQUEST
    }
}

export const userSignUpSuccess = (user) => {
    return {
        type: USER_SIGN_UP_SUCCESS,
        payload: user
    }
}

export const userSignUpError = (error) => {
    return {
        type: USER_SIGN_UP_ERROR,
        payload: error
    }
}

export const userLoginRequest = (data) => {
    return {
        type: USER_LOGIN_REQUEST
    }
}

export const userLoginSuccess = (data) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: data
    }
}

export const userLoginError = (error) => {
    return {
        type: USER_LOGIN_ERROR,
        payload: error
    }
}

export const userLogout = () => {
    return {
        type : USER_LOGOUT,
    }
}

export const userUploadRequest = () => {
    return {
        type: USER_UPLOAD_REQUEST
    }
}

export const userUploadSuccess = (data) => {
    return {
        type: USER_UPLOAD_SUCCESS,
        payload: data
    }
}

export const userUploadError = (data) => {
    return {
        type: USER_UPLOAD_ERROR,
        payload: data
    }
}