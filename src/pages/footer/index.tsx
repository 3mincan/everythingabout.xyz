import React, { FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './style.scss';
import { Link } from 'react-router-dom';

type Props = {
    name?: string
}

export const Footer: FC<Props> = ({ name }) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom" className="d-flex justify-content-center text-center">
                <div className="d-flex footer text-white">
                    <div className="mx-3">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="mx-3">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </Navbar>
        </>
    )}