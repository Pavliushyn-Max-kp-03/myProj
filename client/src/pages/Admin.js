import React from 'react';
import {Container, Button} from "react-bootstrap";

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button
      variant={"outline-dark"}
      className="mt-4 p-2">
        Додати тип
      </Button>
      <Button
      variant={"outline-dark"}
      className="mt-4 p-2">
        Додати бренд
      </Button>
      <Button
      variant={"outline-dark"}
      className="mt-4 p-2">
        Додати сервіс
      </Button>
    </Container>
  );
}

export default Admin;