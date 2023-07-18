import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return <div>
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/}' + props.id} className={navData => navData.isActive ? classes.active : classes.dialog}>{props.name}</NavLink>
        </div>
    </div>
}

const Message = (props) => {
    return <div>
        <div className={classes.message}>{props.message}</div>
    </div>
}

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Tony Stark' },
        { id: 2, name: 'Steve Rogers' },
        { id: 3, name: 'Peter Parker' },
        { id: 4, name: 'Bruce Banner' },
        { id: 5, name: 'Natasha Romanoff' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How you doin?' },
        { id: 3, message: 'Hi...' }
    ]

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

        </div>
        <div className={classes.messages} >
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
            <Message message={messagesData[2].message} />

        </div>
    </div>

}

export default Dialogs;
