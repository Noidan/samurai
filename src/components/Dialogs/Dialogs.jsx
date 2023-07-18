import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const Dialogs = () => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/1' className={navData => navData.isActive ? classes.active : classes.dialog}>Tony Stark</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/2' className={navData => navData.isActive ? classes.active : classes.dialog}>Steve Rogers</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/3' className={navData => navData.isActive ? classes.active : classes.dialog}>Peter Parker</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/4' className={navData => navData.isActive ? classes.active : classes.dialog}>Bruce Banner</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/5' className={navData => navData.isActive ? classes.active : classes.dialog}>Natasha Romanoff</NavLink>
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
