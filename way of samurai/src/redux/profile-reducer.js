import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: '23'},
        {id: 2, post: 'It\'s my first post', likesCount: '654'},
        {id: 3, post: 'Good, and you?'},
        {id: 4, post: 'yo'},
        {id: 5, post: 'yo1'},
        {id: 6, post: 'yo2'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                post: action.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            /*stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';*/
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profele, photos: action.photos}
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        //let message = response.data.messages.length > 0 ? response.data.messages[0] : 'something wrong';
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        //dispatch(stopSubmit('edit-profile', { "contacts": {"facebook": response.data.messages[0]} } ));
    }
}

export default profileReducer;