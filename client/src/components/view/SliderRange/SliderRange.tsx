import React from 'react'
import InputRange, { InputRangeProps, Range } from 'react-input-range';
import '~/node_modules/react-input-range/lib/css/index.css';
import './SliderRange.scss';

type SliderRangeProps = {
    label: string,
    minValue: number,
    maxValue: number,
    step: number,
    value: Range | number,
    handleChange: (value: number | Range) => void;
}

function SliderRange(props: SliderRangeProps) {
    return (
        <div className="slider-range">
            <label>{props.label}</label>
            <InputRange
                minValue={props.minValue}
                maxValue={props.maxValue}
                step={props.step}
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
    )
}

export default SliderRange;
