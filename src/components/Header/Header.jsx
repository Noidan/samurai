import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return <header className={classes.header}>
        <NavLink to='/profile' > <h1> SAMURAI </h1> </NavLink>
    </header>
}

export default Header;