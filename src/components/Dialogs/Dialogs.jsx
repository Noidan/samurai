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
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <DialogItem name='Tony Stark' id='1' />
            <DialogItem name='Steve Rogers' id='2' />
            <DialogItem name='Peter Parker' id='3' />
            <DialogItem name='Bruce Banner' id='4' />
            <DialogItem name='Natasha Romanoff' id='5' />
        </div>
        <div className={classes.messages} >
            <Message message='Hi!' />
            <Message message='How you doin?' />
            <Message message='Hi...' />
        </div>
    </div>

}

export default Dialogs;
