import {
    Favorite,
    FavoriteBorder,
    ShoppingCart,
    ShoppingCartOutlined
} from "@material-ui/icons";
import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./Status.scss";

function Status() {
    const cart = useSelector(state => state.cart)
    const favorites = useSelector(state => state.favorites)

    return (
        <div className="search__status">
            <NavLink to="/favorite" className="search__status__favorite">
                {favorites.length > 0 ? (
                    <Fragment>
                        <Favorite />
                        <span>{favorites.length}</span>
                    </Fragment>
                ) : (
                    <FavoriteBorder />
                )}
            </NavLink>
            <NavLink to="/cart" className="search__status__cart">
                {cart.length > 0 ? (
                    <Fragment>
                        <ShoppingCart />
                        <span>{cart.length}</span>
                    </Fragment>
                ) : (
                    <ShoppingCartOutlined />
                )}
            </NavLink>
        </div>
    );
}

export default Status;
