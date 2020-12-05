import BigDeal from "@/components/view/BigDeal/BigDeal";
import React, { Fragment } from "react";
import Characteristics from "./Characteristics/Characteristics";
import Deals from "./Deals/Deals";
import Hero from "./Hero/Hero";

export default function Home() {
    return (
        <Fragment>
            <Hero/>
            <Characteristics/>
            <Deals/>
        </Fragment>
    );
}

