import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { createType } from "../../http/serviceApi";

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState("");
    const addType = () => {
        createType({ name: value }).then((data) => {
            setValue("");
            onHide();
        });
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати новий тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Введіть назву типу"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрити
                </Button>
                <Button variant="outline-success" onClick={addType}>
                    Додати
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
