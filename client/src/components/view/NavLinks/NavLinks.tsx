import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.scss";

function NavLinks() {
    return (
        <nav className="nav-links">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/products">Products</NavLink>
            <NavLink exact to="/terms">Term</NavLink>
            <NavLink exact to="/contact">Contact</NavLink>
        </nav>
    );
}

export default NavLinks;
