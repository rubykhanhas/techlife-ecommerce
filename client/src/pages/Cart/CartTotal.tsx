import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactTooltip from 'react-tooltip';
import "./CartTotal.scss";
import { CartItemType } from "@/app/slices/cartSlice";

type CartTotalProp = {
    shipFee: number;
    total: number;
};

function CartTotal(props: CartTotalProp) {
    const cart: CartItemType[] = useSelector((state) => state.cart);
    let shipFee: number = 0;
    let totalPrice: number = 0;
    cart.forEach((item) => {
        if (item.amount) {
            // freeship for order from 99$ else 5$/1 order
            shipFee += item.amount * item.salePrice > 99 ? 0 : 5;
            totalPrice += item.amount * item.salePrice;
        }
    });

    return (
        <div className="cart-total">
            <h3>Cart Total</h3>
            <ul>
                <li>
                    <p data-tip="freeship for order from 99$" >Shipping fee</p>
                    <ReactTooltip/>
                    <span>{`$${shipFee}`}</span>
                </li>
                <li>
                    <p>Total</p>
                    <span>{`$${totalPrice + shipFee}`}</span>
                </li>
            </ul>
            <NavLink to="/checkout" className="primary-btn btn">
                proceed to checkout
            </NavLink>
        </div>
    );
}

export default CartTotal;
