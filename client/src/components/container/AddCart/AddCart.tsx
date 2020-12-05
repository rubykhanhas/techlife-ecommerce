import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "./AddCart.scss";
import { addToCart, CartItemType, changeAmount } from "@/app/slices/cartSlice";

type AddCartProp = {
    _id: string;
    title: string;
    amount?: number;
    imageUrl: string;
    color: string;
    salePrice: number;

    classList?: string;
    displayText?: string;
};

function AddCart(props: AddCartProp) {
    const cart: CartItemType[] = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const notify = (type: "success" | "error" | "info", _id: string, title: string) => {
        const config = {
            toastId: _id,
        };
        switch (type) {
            case "success": {
                toast.success(<Toast message="Successful added" text={title} />, config);
                break;
            }
            case "error": {
                toast.error(<Toast message="Product already added" text={title} />, config);
                break;
            }
            case "info": {
                toast.info(<Toast message="Updated" text={title} />, config)
            }
            default:
                return;
        }
    };

    const handleClick = (): any => {
        let isExited: boolean = false;
        let idUpdate: string = "";
        cart.forEach((item) => {
            if (item._id === props._id){
                isExited = true;
                // case props.amount is undefined
                if(item.amount != (props.amount || 1)){
                    idUpdate = item._id;
                }
            }
        });

        if (!isExited) {
            dispatch(
                addToCart({
                    title: props.title,
                    _id: props._id,
                    imageUrl: props.imageUrl,
                    amount: props.amount,
                    color: props.color,
                    salePrice: props.salePrice
                })
            );
            notify("success", props._id, props.title);
        } else {
            if(idUpdate){
                console.log(idUpdate);
                dispatch(changeAmount({_id: idUpdate, amount: props.amount || 1}));
                notify("info", props._id, props.title);
                return;
            }
            notify("error", props._id, props.title);
        }
    };
    return (
        <button className={props.classList ? props.classList : "addCart btn"} onClick={handleClick}>
            {props.displayText ? props.displayText : "Add to Cart"}
        </button>
    );
}

function Toast(props: { message: string; text: string }) {
    return (
        <div>
            <GiShoppingCart fontSize={26} />
            <span style={{ fontSize: "20px", fontWeight: 400, marginLeft: "10px" }}>
                {props.message}
                <p style={{fontSize: '0.6em'}}>{props.text}</p>
            </span>
        </div>
    );
}

export default AddCart;
