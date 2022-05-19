import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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


export default authReducer;