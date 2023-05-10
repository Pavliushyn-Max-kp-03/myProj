import React from 'react';
import {Container, Col, Image, Form, Row, Card, Button} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const ServicePage = () => {
  const service = {id:1, name: "Change battery", price:21000, img: "https://occ-0-325-1567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776"}
  const description = [
    {id:1, title:"Назва", description:"Заміна батареї"},
    {id:2, title:"Складність", description:"Не дуже складно"},
    {id:3, title:"Час", description:"Декілька годин"},
    {id:4, title:"Деякий текст", description:"Дескріпшн"}
  ]
  return (
    <Container className="mt-3">
      <Row>
      <Col md={4}>
      <Image width={300} height={300} src={service.img}/>
      </Col>
      <Col md={4}>
      <Form className="d-flex flex-column align-items-center">
        <h2>{service.name}</h2>
        <div
        className="d-flex align-items-center justify-content-center"
        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover'}}>
        </div>
      </Form>
      </Col>
      <Col md={4}>
      <Card
        className="d-flex flex-column align-items-center justify-content-around"
        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
        <h3>Від: {service.price} грн.</h3>
        <Button variant={"outline-dark"}>Додати в кошик</Button>
        </Card>
      </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
      <h2>Додаткова інформація</h2>
      {description.map((info, index) =>
      <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
      {info.title}: {info.description}
      </Row>)}
      </Row>
      
    </Container>
  );
}

export default ServicePage;