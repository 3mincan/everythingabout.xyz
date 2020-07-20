import React, { FC } from "react"
import { Nav } from "../nav";
import { Footer } from "../footer"
import { Container } from "react-bootstrap";

export const About: FC = () => {
    return (
        <>
            <Nav />
            <Container>
                <h2>About</h2>
            </Container>
            <Footer />
        </>
    );
}