import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

/*import dialogs from "../../index";*/


/*const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendNewMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs dialogsPage={state} updateNewMessageText={onMessageChange} sendMessage={sendNewMessage}/>
    )
}*/

let mapStateToProps = (state)=> {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        sendMessage: (newMessageText)=> {
            dispatch(sendMessageActionCreator(newMessageText));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);