import React, { useEffect, useState } from "react";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";

import "./CategoryMenu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { CategoryItem, CategoriesList } from "@/@types/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function CategoryMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let location = useLocation();
    const handleToggle = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    const categories: CategoriesList = [
        { to: `/laptop`, title: "Laptop" },
        { to: `/mobile-phone`, title: "Mobile Phone" },
    ];

    return (
        <Dropdown
            isOpen={dropdownOpen}
            toggle={handleToggle}
            className="main-nav__category-menu"
        >
            <DropdownToggle className="primary-btn">
                <FontAwesomeIcon icon={faCaretDown} /> Categories
            </DropdownToggle>
            <DropdownMenu>
                {categories.length > 0 &&
                    categories.map((ele) => (
                        <DropdownItem
                            key={ele.to}
                            className={
                                location && location.pathname == ele.to
                                    ? "active"
                                    : ""
                            }
                        >
                            <NavLink to={ele.to}>{ele.title}</NavLink>
                        </DropdownItem>
                    ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default CategoryMenu;
