import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateService from "../components/modals/CreateService";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [serviceVisible, setServiceVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Додати тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Додати бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setServiceVisible(true)}
            >
                Додати сервіс
            </Button>
            <CreateBrand
                show={brandVisible}
                onHide={() => setBrandVisible(false)}
            />
            <CreateType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
            <CreateService
                show={serviceVisible}
                onHide={() => setServiceVisible(false)}
            />
        </Container>
    );
};

export default Admin;
