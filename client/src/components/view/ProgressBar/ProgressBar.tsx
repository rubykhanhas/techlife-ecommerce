import React from 'react'
import './ProgressBar.scss';

type ProgressBarProp = {
    value: number;
    max: number;
}

export default function ProgressBar(props: ProgressBarProp) {
    return (
        <div className="progress-bar">
            <span style={{width: `${Math.round(props.value / props.max * 100)}%`}}></span>
        </div>
    )
}