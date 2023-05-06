import React from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import {NavLink, useLocation} from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизація' : "Реєстрація"}</h2>
          <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введіть email..."
            />
            <Form.Control
            className="mt-3"
            placeholder="Введіть пароль..."
            />
            <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ?
              <div>
                Немає акаунту? <NavLink to={REGISTRATION_ROUTE}>Реєстрація</NavLink>
              </div>
              :
              <div>
              Вже маєте акаунт? <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
              </div>
              }
              <Button
              variant={"outline-success"}>
              {isLogin ? 'Увійти' : 'Реєстрація'}
            </Button>
            </Form>
          </Form>
        </Card>
    </Container>
  );
}

export default Auth;