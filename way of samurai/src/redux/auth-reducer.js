import {headerAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
}
export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
        }
    }
}

export const getAuth = () => async (dispatch) => {
    let data = await headerAPI.getAuth();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await headerAPI.login(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'something wrong';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let data = headerAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl ()
    const captchaUrl = data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authReducer;