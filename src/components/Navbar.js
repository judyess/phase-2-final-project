import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

    return(
        <div className="main-links">
            <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/editor" exact>Editor</NavLink></li>
            <li><NavLink to="/creator" exact>Creator</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;