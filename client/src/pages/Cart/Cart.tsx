import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import CartDiscount from './CartDiscount';
import CartTable from './CartTable';
import CartTotal from './CartTotal';

function Cart() {
    return (
        <section className="cart">
            <Container>
                <Row>
                    <Col xs="12">
                        <CartTable/>
                    </Col>
                    <Col xs="12" md="6">
                        <CartDiscount/>
                    </Col>
                    <Col xs="12" md="6">
                        <CartTotal shipFee={5} total={100}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cart;
