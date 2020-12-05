import React from "react";
import ReactStars from "react-rating-stars-component";

type RatingStarsProp = {
    onRatingChange: (value: number) => void;
    value: number;
    edit: boolean;
};

function RatingStars(props: RatingStarsProp) {
    return (
        <ReactStars
            onChange={props.onRatingChange}
            value={props.value}
            edit={props.edit}
            isHalf={true}
            count={5}
            size={50}
            activeColor="#ffd700"
            color="gray"
        />
    );
}

export default RatingStars;
