import SearchForm from "@/components/shared/Header/Search/SearchForm/SearchForm";
import { Collapse } from "react-collapse";
import React from "react";
import './CollapseMenu.scss';
import NavLinks from "@/components/view/NavLinks/NavLinks";
import Contacts from "@/components/shared/Header/TopNav/Contacts/Contacts";
import Functions from "@/components/shared/Header/TopNav/Functions/Functions";

interface Props {
    isOpened: boolean;
}

function CollapseMenu(props: Props) {
    return (
        <Collapse isOpened={props.isOpened}>
            <SearchForm/>
            <NavLinks/>
            <Contacts/>
            <Functions/>
        </Collapse>
    );
}

export default CollapseMenu;
