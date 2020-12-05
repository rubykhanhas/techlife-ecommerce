import React, { Fragment, useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import QuantityInput from "@/components/view/QuantityInput/QuantityInput";
import "./CartTableItem.scss";
import {useDispatch} from 'react-redux';
import useDebounce from "@/hooks/useDebounce";
import { changeAmount, removeCart } from "@/app/slices/cartSlice";

export type CartTableItemProp = {
    _id: string;
    title: string;
    imageUrl: string;
    color: string;
    salePrice: number;
    amount: number;
};

function CartTableItem(props: CartTableItemProp) {
    const [amount, setAmount] = useState<number>(props.amount);
    const dispatch = useDispatch();
    const debounceAmount = useDebounce(amount, 500);
    const handleChange = (value: number): void => {
        setAmount(value);
    };
    const handleRemove = () => {
        dispatch(removeCart({_id: props._id}));
    }
    useEffect(() => {
        dispatch(changeAmount({_id: props._id, amount: debounceAmount}));
    }, [debounceAmount])
    
    return (
        <tr className="cart-item">
            <td className="display">
                <Display title={props.title} imageUrl={props.imageUrl} _id={props._id} />
            </td>
            <td className="color">
                <span style={{ backgroundColor: props.color }}></span>
                {props.color}
            </td>
            <td className="price">{`$${props.salePrice}`}</td>
            <td className="quantity">
                <QuantityInput defaultValue={props.amount} value={amount} handleChange={handleChange} />
            </td>
            <td className="total">{`$${props.salePrice * amount}`}</td>
            <td className="remove">
                <span onClick={handleRemove} className="remove__btn btn" />
            </td>
        </tr>
    );
}

const Display = (props: { imageUrl: string; title: string; _id: string }) => (
    <Fragment>
        <img src={props.imageUrl} alt="" />
        <Link to={`/product/${props._id}`}>{props.title}</Link>
    </Fragment>
);

export default CartTableItem;
