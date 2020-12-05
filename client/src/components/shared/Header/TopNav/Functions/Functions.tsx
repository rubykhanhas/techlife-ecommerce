import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Functions() {

    return (
        <div className="top-nav__functions">
            <NavLink exact to="/account">
                <FontAwesomeIcon icon={faUserCircle}/>
                <span>Login</span>
            </NavLink>
        </div>
    )
}

export default Functions;
