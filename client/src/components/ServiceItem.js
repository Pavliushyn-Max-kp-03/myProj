import React from 'react';
import {Col, Card} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom"
import {SERVICE_ROUTE} from "../utils/consts";


const ServiceItem = ({service}) => {
    const navigate = useNavigate()
    console.log(navigate)
    
    return (
    <Col md={3} className={"mt-3"} onClick={() => navigate(SERVICE_ROUTE + '/' + service.id)}>
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