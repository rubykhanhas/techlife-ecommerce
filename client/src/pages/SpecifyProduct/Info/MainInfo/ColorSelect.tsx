import React, { useState } from "react";
import chroma from "chroma-js";
import Select from "react-select";

type ColorSelectProp = {
    colors: { value: string, label: string, color: string, isDisable?: boolean | false}[],
    value: { value: string, label: string, color: string, isDisable?: boolean | false},
    onChange: (value) => void,
    isDisabled: boolean
};

function ColorSelect(props: ColorSelectProp) {
    const dot = (color = "#ccc") => ({
        alignItems: "center",
        display: "flex",

        ":before": {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: "block",
            marginRight: 8,
            height: 10,
            width: 10,
        },
    });

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                    ? data.color
                    : isFocused
                    ? color.alpha(0.1).css()
                    : null,
                color: isDisabled
                    ? "#ccc"
                    : isSelected
                    ? chroma.contrast(color, "white") > 2
                        ? "white"
                        : "black"
                    : data.color,
                cursor: isDisabled ? "not-allowed" : "default",

                ":active": {
                    ...styles[":active"],
                    backgroundColor:
                        !isDisabled &&
                        (isSelected ? data.color : color.alpha(0.3).css()),
                },
            };
        },
        input: (styles) => ({ ...styles, ...dot() }),
        placeholder: (styles) => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    };

    return (
        <Select
            defaultValue={props.colors[0]}
            value={props.value}
            options={props.colors}
            onChange={props.onChange}
            styles={colourStyles}
            isDisabled={props.isDisabled}
        />
    );
}

export default ColorSelect;
