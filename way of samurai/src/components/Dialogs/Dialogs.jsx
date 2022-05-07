import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Element} from "../Common/FormsControls/FormsControls";
/*import dialogs from "../../index";*/

const Textarea = Element('textarea');

const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageText'} component={Textarea}
                       validate={[requiredField, maxLength100]}
                       placeholder={'Write new message...'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} />);
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} imgSrc={m.imgSrc}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

export default Dialogs;