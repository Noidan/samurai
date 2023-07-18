import React from "react";
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <div className={classes.dialog + ' ' + classes.active}>
                Tony Stark
            </div>
            <div className={classes.dialog}>
                Steve Rogers
            </div>
            <div className={classes.dialog}>
                Peter Benjamin Parker
            </div>
            <div className={classes.dialog}>
                Dr. Robert Bruce Banner
            </div>
            <div className={classes.dialog}>
                Natasha Romanoff
            </div>
        </div>
        <div className={classes.messages} > 
            <div className={classes.message}>Hi!</div>
            <div className={classes.message}>How you doin?</div>
            <div className={classes.message}>Hi...</div>
        </div>
    </div>

}

export default Dialogs;
