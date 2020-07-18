import React, { FC } from 'react'
import { Spinner } from 'react-bootstrap';
import './style.scss';

export const Loader: FC = () => {
    return (
        <div className="full-screen d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
            {/* <Spinner animation="border" variant="dark" /> */}
        </div>
    )
}