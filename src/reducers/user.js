import {
    USER_SIGN_UP_REQUEST,
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_ERROR,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    USER_UPLOAD_REQUEST,
    USER_UPLOAD_SUCCESS,
    USER_UPLOAD_ERROR
} from './../contants/userContants';

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const userReducer = (state = initialState, action) => {
    let newUserInfo = {};
    switch (action.type) {

        case USER_SIGN_UP_REQUEST:
            return state;

        case USER_SIGN_UP_SUCCESS:

            newUserInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
            return {
                ...state,
                userInfo: newUserInfo
            };

        case USER_SIGN_UP_ERROR:
            return state;

        case USER_LOGIN_REQUEST:
            return state;

        case USER_LOGIN_SUCCESS:

            newUserInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
            return {
                ...state,
                userInfo: newUserInfo
            };

        case USER_LOGIN_ERROR:
            return state;


        case USER_LOGOUT:
            localStorage.clear("userInfo");
            return {}

        case USER_UPLOAD_REQUEST: 
            return state;
        
        case USER_UPLOAD_SUCCESS: 
            const  { image }  = action.payload;
            newUserInfo = {...state.userInfo};
            newUserInfo['image'] = image;
            localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
            return {
                ...state,
                userInfo: newUserInfo
            };

        default: return state;
    }
}

export default userReducer;