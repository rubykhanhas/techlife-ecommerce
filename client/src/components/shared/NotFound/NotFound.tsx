import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import './NotFound.scss';
import Background from '@/assets/images/banner/not-found.svg';

function NotFound() {
    return (
        <div className="not-found">
            <Container fluid>
                <Row>
                    <Col xs="12">
                        <div className="not-found__background">
                            <img src={Background} alt="background not found"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NotFound;
