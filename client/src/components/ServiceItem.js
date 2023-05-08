import React from 'react';
import {Col, Card} from 'react-bootstrap';
import Image from "react-bootstrap/Image";

const ServiceItem = ({service}) => {
    
    return (
    <Col md={3} className={"mt-3"}>
        <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
        <Image width={150} height={150} src={service.img}/>
        <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
            <div>Samsung</div>
        </div>
        <div>{service.name}</div>
        </Card>
    </Col>
    );
};

export default ServiceItem;