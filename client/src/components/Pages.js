import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Pagination from "react-bootstrap/Pagination";

const Pages = observer(() => {
    const { service } = useContext(Context);
    const pages = [1, 2, 3];
    return (
        <Pagination className="mt-3">
            {pages.map((page) => (
                <Pagination.Item>{page}</Pagination.Item>
            ))}
        </Pagination>
    );
});

export default Pages;
