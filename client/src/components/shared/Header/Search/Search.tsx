import React from "react";
import { Col, Container, Row } from "reactstrap";
import SearchForm from "./SearchForm/SearchForm";
import "./Search.scss";
import Status from "./Status/Status";
import Logo from "@/components/view/Logo/Logo";

function Search() {
    return (
        <div className="search">
            <Container>
                <Row>
                    <Col xs="6" md="3" className="search1">
                        <Logo />
                    </Col>
                    <Col sm="12" md="6" className="search2">
                        <SearchForm />
                    </Col>
                    <Col xs="6" md="3" className="search3">
                        <Status />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Search;
