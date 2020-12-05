import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import NavMenu from "./NavMenu/NavMenu";
import "./MainNav.scss";
import CollapseMenu from "./CollapseMenu/CollapseMenu";
import NavLinks from "@/components/view/NavLinks/NavLinks";

function MainNav() {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick: () => void = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <div className="main-nav">
            <Container>
                <Row>
                    <Col xs="auto" md="4">
                        <CategoryMenu />
                    </Col>
                    <Col xs="auto" md="8" className="main-nav2">
                        <NavLinks/>
                    </Col>
                    <Col xs="auto" className="main-nav3">
                        <NavMenu handleClick={handleClick} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <CollapseMenu isOpened={isOpened} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainNav;
