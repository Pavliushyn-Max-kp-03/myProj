import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Dropdown, Col, Row } from "react-bootstrap";
import { Context } from "../../index";
import { fetchTypes, fetchBrands } from "../../http/serviceApi";
import { observer } from "mobx-react-lite";
import { createService } from "../../http/serviceApi";

const CreateService = observer(({ show, onHide }) => {
    const { service } = useContext(Context);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then((data) => service.setTypes(data));
        fetchBrands().then((data) => service.setBrands(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };
    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };
    const changeInfo = (key, value, number) => {
        setInfo(
            info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
        );
    };
    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const addService = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", `${price}`);
        formData.append("img", file);
        formData.append("brandId", service.selectedBrand.id);
        formData.append("typeId", service.selectedType.id);
        formData.append("info", JSON.stringify(info));
        createService(formData).then((data) => onHide());
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати новий сервіс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {service.selectedType.name || "Виберіть тип"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {service.types.map((type) => (
                                <Dropdown.Item
                                    onClick={() =>
                                        service.setSelectedType(type)
                                    }
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {service.selectedBrand.name || "Виберіть бренд"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {service.brands.map((brand) => (
                                <Dropdown.Item
                                    onClick={() =>
                                        service.setSelectedBrand(brand)
                                    }
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть назву сервісу"
                    />
                    <Form.Control
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введіть ціну сервісу"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button variant={"outline-dark"} onClick={addInfo}>
                        Додати додаткову інформацію
                    </Button>
                    {info.map((i) => (
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) =>
                                        changeInfo(
                                            "title",
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                    placeholder="Назва"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) =>
                                        changeInfo(
                                            "description",
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                    placeholder="Опис"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Видалити
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрити
                </Button>
                <Button variant="outline-success" onClick={addService}>
                    Додати
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateService;
