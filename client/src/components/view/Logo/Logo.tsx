import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.scss";
function Logo() {
    return <NavLink className="logo" to="/">TechLife</NavLink>;
}

export default Logo;
