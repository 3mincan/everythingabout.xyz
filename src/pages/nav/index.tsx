import React, { FC } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Lottie from 'react-lottie';
import animationData from "../../assets/info-icon2.json";
import './style.scss';
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-173040299-1');

type Props = {
    name?: string
}

export const Nav: FC<Props> = ({ name }) => {
    ReactGA.pageview(window.location.pathname);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{name ? `Everything About ${name} | everythingabout.xyz` : "everythingabout.xyz | basic info about all countries"}</title>
                <link rel="canonical" href="http://everythingabout.xyz/" />
            </Helmet>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="d-flex justify-content-center text-center">
                <Navbar.Brand href="/">
                    <div className="d-flex">
                        <Lottie options={defaultOptions}
                            height={30}
                            width={30} />
                        <span className="px-1 brand-text">{name ? `Everything About ${name}` : "everythingabout.xyz"}</span>
                    </div>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}
