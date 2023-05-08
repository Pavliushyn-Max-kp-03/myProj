import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { Form, Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {service} = useContext(Context)
    return (
        <Form className="d-flex flex-wrap">
            {service.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => service.setSelectedBrand(brand)}
                    border={brand.id === service.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    
    );
});

export default BrandBar;