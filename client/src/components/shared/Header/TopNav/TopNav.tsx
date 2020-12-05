import React from 'react'
import {Col, Container, Row} from 'reactstrap';
import Contacts from './Contacts/Contacts';
import Functions from './Functions/Functions';

import './TopNav.scss';

function TopNav() {
    return (
        <div className="top-nav">
            <Container>
                <Row>
                    <Col xs="auto"><Contacts/></Col>
                    <Col xs="auto"><Functions/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopNav;
