import React, { FC } from 'react'
import { Spinner } from 'react-bootstrap';

export const Loader: FC = () => {
    return (
        <div className="full-screen text-center align-items-center">
            <Spinner animation="border" variant="dark" />
        </div>
    )
}