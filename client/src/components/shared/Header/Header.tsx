import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify';
import MainNav from './MainNav/MainNav';
import Search from './Search/Search';
import TopNav from './TopNav/TopNav'
import "react-toastify/dist/ReactToastify.min.css";

function Header() {
    return (
        <Fragment>
            <TopNav/>
            <Search/>
            <MainNav/>
            <ToastContainer
                autoClose={1500}
            />
        </Fragment>
    )   
}

export default Header;
