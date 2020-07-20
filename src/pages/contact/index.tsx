import React, { FC } from "react"
import { Nav } from "../nav";
import { Footer } from "../footer"
import { Container, Form, Col, Row } from "react-bootstrap";
import './style.scss';

export const Contact: FC = () => {
    return (
        <>
            <Nav />
            <Container className="mt-5">
                <h2>Contact Us</h2>
                <Row>
                    <Col lg={12}>
                        <Form method="POST" action="https://formspree.io/e.demirkaya@gmail.com">
                            <div id="contact-form" className="form-container" data-form-container>
                                <div className="input-container">
                                    <div className="row d-flex my-3">
                                        <span className="col-lg-6" >
                                            <input type="text" data-min-length="8" placeholder="Full Name" />
                                        </span>
                                        <span className="col-lg-6">
                                            <input type="email" placeholder="Email" />
                                        </span>
                                    </div>
                                    <div className="row my-3">
                                        <span className="col-lg-12" >
                                        <textarea data-min-length="10" placeholder="Message"></textarea>
                                        </span>
                                    </div>
                                    <div className="row d-flex justify-content-center my-3">
                                        <button type="button" className="btn btn-primary submit-form">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}