import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeaturedDeals from "./FeaturedDeals/FeaturedDeals";
import HotDeals from "./HotDeals/HotDeals";

function Deals() {
    return (
        <section className="deals" id="deals">
            <Container>
                <Row>
                    <Col xs="12" md="6" xl="4">
                        <HotDeals />
                    </Col>
                    <Col xs="12" md="6" xl="8">
                        <FeaturedDeals />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Deals;
