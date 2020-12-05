import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Hero.scss";
import ProductImage from "@/assets/images/banner/hero__product.png";

function Hero() {
    return (
        <div className="hero">
            <Container>
                <Row>
                    <Col xs="auto" lg="6" className="absolute">
                        <div className="hero__content">
                            <h1>New Era Of Smartphones</h1>
                            <div className="hero__content__price">
                                <span className="hero__content__price--old">
                                    $530
                                </span>
                                $460
                            </div>
                            <h5>Apple Iphone 6S</h5>
                            <a href="#deals" className="primary-btn">
                                Shop Now
                            </a>
                        </div>
                    </Col>
                    <Col xs="12" lg="6">
                        <div className="hero__product__image">
                            <img src={ProductImage} alt="hero product" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
