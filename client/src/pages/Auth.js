import React, { useState } from "react";
import { Container, Form, Card, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink, useLocation } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userApi";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
        if (isLogin) {
            const response = await login();
        } else {
            const response = await registration(email, password);
            console.log(response);
        }
        console.log(5);
        // const response = await registration(email, password);
    };
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">
                    {isLogin ? "Авторизація" : "Реєстрація"}
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть пароль..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <div>
                                Немає акаунту?{" "}
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Реєстрація
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                Вже маєте акаунт?{" "}
                                <NavLink to={LOGIN_ROUTE}>Увійти</NavLink>
                            </div>
                        )}
                        <Button variant={"outline-success"} onClick={click}>
                            {isLogin ? "Увійти" : "Реєстрація"}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
