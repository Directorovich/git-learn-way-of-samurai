const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText,
                imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
            /*stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';*/
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newTextOfMessage
            };
        }
        default: return state;
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextOfMessage: text
    }
}
export default dialogsReducer;