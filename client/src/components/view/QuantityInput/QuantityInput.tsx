import React, { useRef } from "react";
import './QuantityInput.scss';

type QuantityInputProp = {
    min?: number;
    max?: number;
    defaultValue: number;
    value: number;
    handleChange: (value: number) => void;
};

function QuantityInput(props: QuantityInputProp) {
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        //Prevent case replace selection by `0`
        if (e.target.value && parseInt(e.target.value) >= 1) {
            props.handleChange(parseInt(e.target.value));
        } else {
            // Prevent typing incorret pattern
            if (inputRef && inputRef.current) {
                inputRef.current.value = "1";
                props.handleChange(1);
            }
        }
    };

    const handleClick = (direction: number): void => {
        if (inputRef && inputRef.current) {
            let value = parseInt(inputRef.current.value);
            // Prevent case decrease < 1
            if (direction < 0 && value === 1) return;
            else {
                inputRef.current.value = (value + direction).toString();
                props.handleChange(parseInt(inputRef.current.value));
            }
        }
    };

    return (
        <div className="quantity-input">
            <div
                className="quantity-input__btn down btn"
                onClick={() => handleClick(-1)}
            >
                -
            </div>
            <input
                type="number"
                ref={inputRef}
                min={props.min || 1}
                pattern="[0-9]*"
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={onChange}
            />
            <div
                className="quantity-input__btn up btn"
                onClick={() => handleClick(1)}
            >
                +
            </div>
        </div>
    );
}

export default QuantityInput;
