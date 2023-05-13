import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ServiceList from "../components/ServiceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypes } from "../http/deviceApi";

const Shop = observer(() => {
    const { service } = useContext(Context);
    useEffect(() => {
        fetchTypes().then((data) => service.setTypes(data));
    }, []);
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <ServiceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
