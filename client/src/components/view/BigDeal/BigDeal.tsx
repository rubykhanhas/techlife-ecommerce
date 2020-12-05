import React from "react";
import "./BigDeal.scss";
import ProgressBar from "@/components/view/ProgressBar/ProgressBar";
import Timer from "@/components/view/Timer/Timer";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

interface BigDealProp {
    _id: string;
    image: string;
    title: string;
    category: string;
    price: number;
    sales: number;
    salePrice: number;
    sold: number;
    remain: number;
}

export default function BigDeal(props: BigDealProp) {
    return (
        <div className="big-deal">
            <div className="big-deal__image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="big-deal__content">
                <div className="big-deal__content__text">
                    <h6>{props.category}</h6>
                    <Link to={`/product/${props._id}`}>{props.title}</Link>
                </div>
                <div className="big-deal__content__price">
                    <span className="big-deal__content__price--old">${props.price}</span>
                    <span>${props.salePrice}</span>
                </div>
            </div>
            <div className="big-deal__quantity">
                <div className="big-deal__quantity__text">
                    <p>
                        Sold: <span>{props.sold}</span>
                    </p>
                    <p>
                        Available: <span>{props.remain}</span>
                    </p>
                </div>
                <ProgressBar value={props.sold} max={props.remain + props.sold} />
            </div>
            <div className="big-deal__timer">
                <div className="big-deal__timer__text">
                    <h6>Hurry Up</h6>
                    <p>Offer end in:</p>
                </div>
                <Timer initHour={24} initMinute={1} />
            </div>
        </div>
    );
}

const BigDealSkeleton = () => (
    <div className="big-deal-skeleton">
        <div className="big-deal-skeleton__image" />
        <div className="big-deal-skeleton__content">
            <div className="big-deal-skeleton__content__text">
                <h6 />
                <a />
            </div>
            <div className="big-deal-skeleton__content__price">
                <span />
                <span />
            </div>
        </div>
        <div className="big-deal-skeleton__quantity" />
        <div className="big-deal-skeleton__timer" />
        <Shimmer />
    </div>
);

export { BigDealSkeleton };
