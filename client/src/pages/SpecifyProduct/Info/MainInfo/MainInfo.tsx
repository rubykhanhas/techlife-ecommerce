import React, { useState } from "react";
import ColorSelect from "./ColorSelect";
import QuantityInput from "@/components/view/QuantityInput/QuantityInput";
import RatingStars from "@/components/view/RatingStars/RatingStars";
import AddFavor from "@/components/container/AddFavor/AddFavor";
import Shimmer from "@/components/view/Shimmer/Shimmer";
import AddCart from "@/components/container/AddCart/AddCart";
import {useSelector} from 'react-redux';
import "./MainInfo.scss";
import { CartItemType } from "@/app/slices/cartSlice";

type ColorType = {
    label: string;
    value: string;
    color: string;
};

type MainInfoProp = {
    _id: string;
    images: string[];
    category: string;
    title: string;
    rating?: number;
    price: number;
    salePrice: number;
    colors?: ColorType[];
    shortDes: string;
};

function MainInfo(props: MainInfoProp) {
    const cart:CartItemType[] = useSelector(state => state.cart);
    let initAmount:number = 1;
    cart.forEach(item => {
        if(item._id === props._id){
            initAmount = item.amount || 1;
        }
    })

    const colors: ColorType[] = [{ value: "gray", label: "Gray", color: "gray" }];
    const [amount, setAmount] = useState<number>(initAmount);
    const [selectedColor, setSelectedColor] = useState<ColorType>(props.colors ? props.colors[0] : colors[0]);
    const [stars, setStars] = useState<number>(props.rating ? props.rating : 0);
    //
    const handleColorChange = (value: ColorType): void => {
        setSelectedColor(value);
    };
    const handleAmountChange = (value: number): void => {
        setAmount(value);
    };
    const handleRatingChange = (value: number): void => {
        setStars(value);
    };

    return (
        <section className="main-info">
            <div className="main-info__text">
                <div className="category">{props.category}</div>
                <div className="name">{props.title}</div>
                <div className="rating">
                    <RatingStars onRatingChange={handleRatingChange} value={stars} edit={true} />
                </div>
                <div className="short-des">{props.shortDes}</div>
            </div>
            <div className="main-info__order">
                <div className="options">
                    <QuantityInput value={amount} handleChange={handleAmountChange} defaultValue={1} />
                    <ColorSelect isDisabled={true} colors={colors} value={selectedColor} onChange={handleColorChange} />
                </div>
                <div className="price">
                    <span className="price--old">${props.price}</span>${props.salePrice}
                </div>
                <div className="group-btn">
                    <AddCart
                        imageUrl={props.images[0]}
                        color={selectedColor.value}
                        salePrice={props.salePrice}
                        amount={amount}
                        _id={props._id}
                        title={props.title}
                        classList="addCart btn"
                    />
                    <AddFavor _id={props._id} />
                </div>
            </div>
        </section>
    );
}

export const MainInfoSkeleton = () => (
    <div className="main-info main-info-skeleton">
        <div className="main-info__text">
            <div className="category">
                <p />
            </div>
            <div className="name">
                <p />
            </div>
            <div className="rating">
                <div />
            </div>
            <div className="short-des">
                <p />
            </div>
        </div>
        <div className="main-info__order">
            <div className="options">
                <div />
                <div />
            </div>
            <div className="price">
                <span />
            </div>
            <div className="group-btn">
                <button className="addCart btn">Add to Cart</button>
                <AddFavor _id="2" />
            </div>
        </div>
        <Shimmer />
    </div>
);

export default MainInfo;
