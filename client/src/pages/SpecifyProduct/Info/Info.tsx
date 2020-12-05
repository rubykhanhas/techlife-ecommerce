import React from "react";
import { Col, Container, Row } from "reactstrap";
import Album, { AlbumSkeleton } from "./Album/Album";
import MainInfo, { MainInfoSkeleton } from "./MainInfo/MainInfo";
import Aside from "@/pages/SpecifyProduct/Info/Aside/Aside";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "@/query/product";

function Info() {
    const { _id } = useParams();
    const { loading, data } = useQuery(GET_PRODUCT, {
        variables: {
            _id,
        },
    });

    return (
        <section className="info">
            <Container>
                {data && data.getProductById && (
                    <Row>
                        <Col xs="12" md="6">
                            <Album images={data.getProductById.images} />
                        </Col>
                        <Col xs="12" md="6">
                            <MainInfo
                                images={data.getProductById.images}
                                _id={data.getProductById._id}
                                title={data.getProductById.title}
                                category={data.getProductById.category}
                                price={data.getProductById.price}
                                salePrice={data.getProductById.salePrice}
                                shortDes={data.getProductById.shortDes}
                            />
                        </Col>
                        <Col xs="12">
                            <Aside longDes={data.getProductById.longDes} />
                        </Col>
                    </Row>
                )}
                {loading && (
                    <Row>
                        <Col xs="12" md="6">
                            <AlbumSkeleton />
                        </Col>
                        <Col xs="12" md="6">
                            <MainInfoSkeleton />
                        </Col>
                        <Col xs="12">
                            <Aside />
                        </Col>
                    </Row>
                )}
            </Container>
        </section>
    );
}

export default Info;
