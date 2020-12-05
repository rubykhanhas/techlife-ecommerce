import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Brands from "./Brands/Brands";
import Newsletter from "./Newsletter/Newsletter";
import Signatures from "./Signatures/Signatures";
import './Footer.scss';

function Footer() {
    return (
        <Fragment>
            <Brands />
            <footer className="footer">
                <Container>
                    <Row>
                        <Col xs="12" md="6"><Signatures/></Col>
                        <Col xs="12" md="6"><Newsletter/></Col>
                    </Row>
                </Container>
            </footer>
        </Fragment>
    );
}

export default Footer;
