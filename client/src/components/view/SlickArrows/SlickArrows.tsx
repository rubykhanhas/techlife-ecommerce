import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './SlickArrows.scss';

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <span className="slick-arrow prev-arrow" onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </span>
    );
};

export const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <span className="slick-arrow next-arrow" onClick={onClick}>
            <FontAwesomeIcon icon={faAngleRight} />
        </span>
    );
};
