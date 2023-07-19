import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return <div className={classes.dialog}>
        <NavLink to={'/dialogs/}' + props.id} className={navData => navData.isActive ? classes.active : classes.dialog}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Tony Stark' },
        { id: 2, name: 'Steve Rogers' },
        { id: 3, name: 'Peter Parker' },
        { id: 4, name: 'Bruce Banner' },
        { id: 5, name: 'Natasha Romanoff' }
    ]

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How you doin?' },
        { id: 3, message: 'Hi...' }
    ]

    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messages
        .map(message => <Message message={message.message} />)

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages} >
            {messagesElements}
        </div>
    </div>
}

export default Dialogs;
