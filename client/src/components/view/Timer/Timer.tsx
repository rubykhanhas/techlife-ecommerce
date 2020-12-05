import { Minimize } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import './Timer.scss';

type TimerProp = {
    initHour: number;
    initMinute?: number;
};

function Timer(props: TimerProp) {
    const [hour, setHour] = useState(props.initHour);
    const [minute, setMinute] = useState(props.initMinute || 0);
    const [second, setSecond] = useState(60);

    useEffect(() => {
        let myInterval = setInterval(() => {
            setSecond(prevSec => prevSec - 1);

            if (hour === 0 && minute === 0 && second === 0) {
                clearInterval(myInterval);
                setHour(0);
                setMinute(0);
                setSecond(0);
            }

            if(second == 0) {
                setSecond(59);
                setMinute(prevMin => prevMin - 1);
            }

            if(minute == 0) {
                setMinute(59);
                setHour(prevHour => prevHour - 1);
            }
                
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    })

    const returnTwoNumber = (value: number) => {
        if (value >= 10) {
            return value;
        } else {
            return `0${value}`;
        }
    }

    return (
        <div className="timer">
            <div className="timer__unit">{returnTwoNumber(hour)}<span>hours</span></div>
            <div className="timer__unit">{returnTwoNumber(minute)}<span>minutes</span></div>
            <div className="timer__unit">{returnTwoNumber(second)}<span>seconds</span></div>
        </div>
    );
}

export default Timer;
