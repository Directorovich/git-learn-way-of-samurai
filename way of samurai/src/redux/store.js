/*/!*import {_rerenderEntireTree} from "../render";*!/
let _rerenderEntireTree = () => {
    console.log('_state was change')
}

let _state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: '23'},
            {id: 2, post: 'It\'s my first post', likesCount: '654'},
            {id: 3, post: 'Good, and you?'},
            {id: 4, post: 'yo'},
            {id: 5, post: 'yo1'},
            {id: 6, post: 'yo2'}
        ],
        newPostText: 'write something new Post...'
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Dima',
                imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
            },
            {id: 2, name: 'Maksym', imgSrc: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'},
            {
                id: 3,
                name: 'Alexey',
                imgSrc: 'https://storage.streamdps.com/iblock/007/0076f2aea825b9fb2670c69557d1e09b.jpg'
            },
            {
                id: 4,
                name: 'Maria',
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_yGy9YUehj7H_e0wobJly38DAvTUPX9Jzg&usqp=CAU'
            },
            {
                id: 5,
                name: 'Sofiya',
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&usqp=CAU'
            },
            {
                id: 6,
                name: 'Taras',
                imgSrc: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
            }
        ],
        messages: [
            {id: 1, message: 'Hi', imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'},
            {id: 2, message: 'How are you?', imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'},
            {id: 3, message: 'Good, and you?', imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'},
            {id: 4, message: 'yo', imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'},
            {id: 5, message: 'yo1', imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'},
            {id: 6, message: 'yo2', imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'}
        ],
        newMessageText: 'Write new message..',
    },
    sideBar: {
        linkNav: [
            {link: '/profile', linkName: 'Profile'},
            {link: '/dialogs', linkName: 'Messages'},
            {link: '/news', linkName: 'News'},
            {link: '/music', linkName: 'Music'},
            {link: '/setting', linkName: 'Settings'},
            {link: '/friends', linkName: 'Friends'}
        ],
        friends: [
            {
                id: 1,
                name: 'Dima',
                imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
            },
            {
                id: 2,
                name: 'Maksym',
                imgSrc: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'
            },
            {
                id: 3,
                name: 'Alexey',
                imgSrc: 'https://storage.streamdps.com/iblock/007/0076f2aea825b9fb2670c69557d1e09b.jpg'
            }
        ]
    },
}

export const addPost = () => {
    let newPost = {
        id: 7,
        post: _state.profilePage.newPostText,
        likesCount: '0'
    };
    _state.profilePage.posts.push(newPost);
    _state.profilePage.newPostText = '';
    _rerenderEntireTree(_state);
}
export const updateNewPostText = (newText) => {
    _state.profilePage.newPostText = newText;
    _rerenderEntireTree(_state);
}
export const sendMessage = () => {
    let newMessage = {
        id: 6,
        message: _state.dialogsPage.newMessageText,
        imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
    }
    _state.dialogsPage.messages.push(newMessage);
    _state.dialogsPage.newMessageText = '';
    _rerenderEntireTree(_state);
}

export const updateNewMessageText = (newTextOfMessage) => {
    _state.dialogsPage.newMessageText = newTextOfMessage;
    _rerenderEntireTree(_state);
}
export const subscribe = (observer) => {
    _rerenderEntireTree = observer;
}
export default _state;*/

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: '23'},
                {id: 2, post: 'It\'s my first post', likesCount: '654'},
                {id: 3, post: 'Good, and you?'},
                {id: 4, post: 'yo'},
                {id: 5, post: 'yo1'},
                {id: 6, post: 'yo2'}
            ],
            newPostText: 'write something new Post...'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dima',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                },
                {
                    id: 2,
                    name: 'Maksym',
                    imgSrc: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'
                },
                {
                    id: 3,
                    name: 'Alexey',
                    imgSrc: 'https://storage.streamdps.com/iblock/007/0076f2aea825b9fb2670c69557d1e09b.jpg'
                },
                {
                    id: 4,
                    name: 'Maria',
                    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_yGy9YUehj7H_e0wobJly38DAvTUPX9Jzg&usqp=CAU'
                },
                {
                    id: 5,
                    name: 'Sofiya',
                    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lMZEGPcwqXQauZ39i3WethGEMWnkAPNoSw&usqp=CAU'
                },
                {
                    id: 6,
                    name: 'Taras',
                    imgSrc: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                }
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                },
                {
                    id: 2,
                    message: 'How are you?',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                },
                {
                    id: 3,
                    message: 'Good, and you?',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                },
                {
                    id: 4,
                    message: 'yo',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                },
                {
                    id: 5,
                    message: 'yo1',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                },
                {
                    id: 6,
                    message: 'yo2',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                }
            ],
            newMessageText: 'Write new message..',
        },
        sideBar: {
            linkNav: [
                {link: '/profile', linkName: 'Profile'},
                {link: '/dialogs', linkName: 'Messages'},
                {link: '/news', linkName: 'News'},
                {link: '/music', linkName: 'Music'},
                {link: '/setting', linkName: 'Settings'},
                {link: '/friends', linkName: 'Friends'}
            ],
            friends: [
                {
                    id: 1,
                    name: 'Dima',
                    imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                },
                {
                    id: 2,
                    name: 'Maksym',
                    imgSrc: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'
                },
                {
                    id: 3,
                    name: 'Alexey',
                    imgSrc: 'https://storage.streamdps.com/iblock/007/0076f2aea825b9fb2670c69557d1e09b.jpg'
                }
            ]
        },
    },
    _rerenderEntireTree() {
        console.log('_state was change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },


    /*addPost() {
        let newPost = {
            id: 7,
            post: this._state.profilePage.newPostText,
            likesCount: '0'
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    sendMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
            imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewMessageText(newTextOfMessage) {
        this._state.dialogsPage.newMessageText = newTextOfMessage;
        this._rerenderEntireTree(this._state);
    },*/

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._rerenderEntireTree(this._state);

        /*if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                post: this._state.profilePage.newPostText,
                likesCount: '0'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
                imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newTextOfMessage;
            this._rerenderEntireTree(this._state);
        }*/
    }


}


