import TabLine from "@/components/view/TabLine/TabLine";
import React from "react";
import './Aside.scss';

type Review = {
    user: string;
    text: string;
};

type AsideProp = {
    longDes?: string;
    reviews?: Review[];
};

function Aside(props: AsideProp) {
    const Description = () => (
        <div>{props.longDes ? props.longDes : "Nothing there"}</div>
    );
    const Review = () => (
        <div>{props.reviews ? props.reviews : "Nothing there"}</div>
    );

    return (
        <div className="aside-info">
            <TabLine
                tabs={[
                    { title: "Description", component: <Description /> },
                    {
                        title: `Reviews (${props.reviews ? props.reviews.length : 0})`,
                        component: <Review />,
                    },
                ]}
            ></TabLine>
        </div>
    );
}

export default Aside;
