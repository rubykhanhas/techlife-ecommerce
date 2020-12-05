import React, { Component, useState } from "react";
import "./TabLine.scss";

type TabProp = { title: string; component: JSX.Element };

type TabLineProp = {
    tabs: TabProp[];
};

function TabLine(props: TabLineProp) {
    const [currentTab, setCurrentTab] = useState(0);

    const handleClick = (e): void => {
        setCurrentTab(parseInt(e.target.getAttribute("data-index")));
    };

    const tabsWidth = props.tabs.map((el) => {
        return el.title.length;
    });

    const tabline = {
        totalWidth: tabsWidth.reduce((accum, el) => accum + el, 0),
        left: function (): number {
            // % past
            const pastValue = tabsWidth.reduce((accum, el, index) => {
                if (index < currentTab) {
                    return accum + el;
                }
                return accum;
            }, 0);

            const useableValue =
                (100 - this.totalWidth) / (props.tabs.length + 1);
            return Math.round(useableValue * (currentTab + 1) + pastValue);
        },
        width: function (): number {
            return tabsWidth[currentTab];
        },
    };

    return (
        <div className="tabline">
            <div className="tabline__tabs">
                {props.tabs.length > 0 &&
                    props.tabs.map((el, index) => {
                        return (
                            <div
                                key={el.title}
                                className="tab"
                                data-index={index}
                                onClick={handleClick}
                            >
                                {el.title}
                            </div>
                        );
                    })}
            </div>
            <div className="tabline__line">
                <span
                    style={{
                        width: `${tabline.width()}%`,
                        left: `${tabline.left()}%`,
                    }}
                ></span>
            </div>

            <div className="tabline__content">
                {
                    props.tabs[currentTab].component
                }
            </div>
        </div>
    );
}

export default TabLine;
