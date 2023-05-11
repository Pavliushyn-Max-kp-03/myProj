import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ServiceItem from "./ServiceItem";
import { Row } from "react-bootstrap";

const ServiceList = observer(() => {
    const { service } = useContext(Context);
    return (
        <Row className="d-flex">
            {service.services.map((service) => (
                <ServiceItem key={service.id} service={service} />
            ))}
        </Row>
    );
});

export default ServiceList;
