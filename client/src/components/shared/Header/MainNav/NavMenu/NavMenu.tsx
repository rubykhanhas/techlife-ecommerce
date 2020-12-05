import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./NavMenu.scss";

interface Props {
    handleClick: () => void;
}

function NavMenu(props: Props) {
    return (
        <div className="main-nav__nav-menu">
            <button onClick={props.handleClick} className="primary-btn">
                <FontAwesomeIcon icon={faBars} />
                <span>Menu</span>
            </button>
        </div>
    );
}

export default NavMenu;
