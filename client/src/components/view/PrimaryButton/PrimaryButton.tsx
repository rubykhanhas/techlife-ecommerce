import React from 'react'
import './PrimaryButton.scss';

interface PrimaryButtonProp {
    title: string;
    handleClick?: () => void;
}

function PrimaryButton(props: PrimaryButtonProp) {
    return (
        <button className="primary-btn" onClick={props.handleClick}>
            {
                props.title
            }
        </button>
    )
}

export default PrimaryButton;
