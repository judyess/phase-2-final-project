import React from "react";
//import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar(){

    return(
        <div>
            <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about" exact>About</NavLink></li>
            <li><NavLink to="/form" exact>Form</NavLink></li>
            <li><NavLink to="/display" exact>Display</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;