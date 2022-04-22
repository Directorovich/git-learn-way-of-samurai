import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessage, sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
/*import dialogs from "../../index";*/


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} />);
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} imgSrc={m.imgSrc}/>);

    let refNewMessage= React.createRef();
    let sendNewMessage = () => {
        props.sendMessage();

    }

    let onMessageChange = () => {
        let text = refNewMessage.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div>
                    <textarea ref={refNewMessage}
                    onChange={onMessageChange}
                    value={state.newMessageText}/>
                    <button onClick={sendNewMessage}>send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;