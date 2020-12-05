import { toggleFavoriteStatus } from "@/app/slices/favoriteSlice";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import "./AddFavor.scss";

type AddFavorProp = {
    _id: string;
    classList?: string;
};

function AddFavor(props: AddFavorProp) {
    const favorites: string[] = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    let isLoved: boolean = false;
    favorites.forEach((item) => {
        if (item === props._id) isLoved = true;
    });

    const handleClick = (): void => {
        dispatch(toggleFavoriteStatus(props._id));
    };

    return (
        <button className={props.classList ? props.classList : "addFavor btn"} onClick={handleClick}>
            <FaHeart fill={isLoved ? `#e91e67` : `#cccccc`} />
        </button>
    );
}

export default AddFavor;
