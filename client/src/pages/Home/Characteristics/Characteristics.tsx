import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import './Characteristics.scss';
import LogisticsIcon from '@/assets/images/logistics.png';
import PaymentIcon from '@/assets/images/payment-method.png';
import RefundIcon from '@/assets/images/refund.png';
import VoucherIcon from '@/assets/images/voucher.png';

function Characteristics() {
    return (
        <section className="characteristics">
            <Container>
                <Row>
                    <Col xs="12" md="6" xl="3">
                        <div className="characteristics__item">
                            <div className="characteristics__item__icon">
                                <img src={LogisticsIcon} alt="free delivery"/>
                            </div>
                            <div className="characteristics__item__content">
                                <h5>Free Delivery</h5>
                                <h6>for all orders $99</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" md="6" xl="3">
                        <div className="characteristics__item">
                            <div className="characteristics__item__icon">
                                <img src={PaymentIcon} alt="payment methods"/>
                            </div>
                            <div className="characteristics__item__content">
                                <h5>Diverse Payment Method</h5>
                                <h6>COD, Card, Bitcoin,..</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" md="6" xl="3">
                        <div className="characteristics__item">
                            <div className="characteristics__item__icon">
                                <img src={RefundIcon} alt="Support refund"/>
                            </div>
                            <div className="characteristics__item__content">
                                <h5>Refund Support</h5>
                                <h6>24 hours</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" md="6" xl="3">
                        <div className="characteristics__item">
                            <div className="characteristics__item__icon">
                                <img src={VoucherIcon} alt="sales coupon"/>
                            </div>
                            <div className="characteristics__item__content">
                                <h5>Gift, Coupon</h5>
                                <h6>every weekend</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Characteristics;
