import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "./Brands.scss";

import AppleLogo from "@/assets/images/brand_logo/apple.svg";
import OppoLogo from "@/assets/images/brand_logo/oppo.svg";
import VivoLogo from "@/assets/images/brand_logo/vivo.svg";
import XiaomiLogo from "@/assets/images/brand_logo/xiaomi.svg";
import AsusLogo from "@/assets/images/brand_logo/asus.svg";
import LenovoLogo from "@/assets/images/brand_logo/lenovo.svg";
import NokiaLogo from "@/assets/images/brand_logo/nokia.svg";
import SamsungLogo from "@/assets/images/brand_logo/samsung.svg";

import { PrevArrow, NextArrow } from "@/components/view/SlickArrows/SlickArrows";

function Brands() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        swipeToSlide: 2,
        lazyLoad: "progressive",
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    return (
        <div className="brands">
            <Container>
                <Row>
                    <Col xs="12">
                        <Slider {...settings}>
                            <div className="brands__logo-container">
                                <img src={AppleLogo} alt="AppleLogo" />
                            </div>
                            <div className="brands__logo-container">
                                <img src={OppoLogo} alt="OppoLogo" />
                            </div>
                            <div className="brands__logo-container">
                                <img src={VivoLogo} alt="VivoLogo" />
                            </div>
                            <div className="brands__logo-container">
                                <img src={XiaomiLogo} alt="XiaomiLogo" />
                            </div>
                            <div className="brands__logo-container">
                                <img src={LenovoLogo} alt="LenovoLogo" />
                            </div>
                            <div className="brands__logo-container">
                                <img src={NokiaLogo} alt="NokiaLogo" />
                            </div>
                            <div className="brands__logo-container">
                                <img src={AsusLogo} alt="AsusLogo" />
                            </div>
                            <div className="brands__logo-container">
                                <img src={SamsungLogo} alt="SamsungLogo" />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Brands;
