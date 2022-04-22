import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = (props) => {


    return (
        <div className={s.message}>
            <div>
                <img src={props.imgSrc} />
                {props.message}

            </div>

        </div>
    )
}
export default MessageItem;