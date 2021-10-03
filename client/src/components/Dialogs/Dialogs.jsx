import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    // console.log(props)
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} img={dialog.img}/>);

    let messageElements = state.messages.map(message => <Message id={message.id} key={message.id} message={message.message}/>);

    let onMessageChange = (e) => {
        let value = e.target.value;
        props.updateNewMessage(value);
    }

    let addMessage = () => {
        props.addMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div className={s.newMessageArea}>
                    <input type="text" onChange={onMessageChange} value={state.newMessage}/>
                    <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs
