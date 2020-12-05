import React from "react";
import { Col, Container, Row } from "reactstrap";
import Spinner from "@/components/view/Spinner/Spinner";
import './Loading.scss'
function Loading() {
    return (
        <div className="loading">
            <Container fluid>
                <Row>
                    <Col xs="auto">
                        <Spinner />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Loading;
