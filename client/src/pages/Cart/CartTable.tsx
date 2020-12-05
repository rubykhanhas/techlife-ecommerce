import React from "react";
import { useSelector } from "react-redux";
import "./CartTable.scss";
import CartTableItem, { CartTableItemProp } from "./CartTableItem";
import EmptyCartImage from "@/assets/images/banner/empty_cart.svg";

function CartTable() {
    const cart = useSelector((state) => state.cart);
    return (
        <div className="cart-table-wrapper">
            {cart && cart.length > 0 ? (
                <table>
                    <Head />
                    <Body cart={cart} />
                </table>
            ) : (
                <div className="empty-cart">
                    <h3>Empty cart :( </h3>
                    <img src={EmptyCartImage} alt="Empty Cart" />
                </div>
            )}
        </div>
    );
}

const Head = () => (
    <thead>
        <tr>
            <th>Name</th>
            <th className="color">Color</th>
            <th>Price</th>
            <th>Quanity</th>
            <th>Total</th>
            <th className="remove-col"></th>
        </tr>
    </thead>
);

const Body = (props: { cart: CartTableItemProp[] }) => (
    <tbody>
        {props.cart &&
            props.cart.map((item) => (
                <CartTableItem
                    key={item._id}
                    imageUrl={item.imageUrl}
                    _id={item._id}
                    title={item.title}
                    color={item.color}
                    salePrice={item.salePrice}
                    amount={item.amount}
                />
            ))}
    </tbody>
);

export default CartTable;
