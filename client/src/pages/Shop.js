import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ServiceList from "../components/ServiceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypes, fetchBrands, fetchServices } from "../http/serviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const { service } = useContext(Context);
    useEffect(() => {
        fetchTypes().then((data) => service.setTypes(data));
        fetchBrands().then((data) => service.setBrands(data));
        fetchServices().then((data) => {
            service.setServices(data.rows);
            service.setTotalCount(data.count);
        });
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
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
