import React, {FC} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Lottie from 'react-lottie';
import animationData from "../../assets/info-icon2.json";
import './style.scss';

type Props = {
    name?: string
}

export const Nav: FC<Props> = ({  name }) => {

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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="d-flex justify-content-center text-center">
                <Navbar.Brand href="/">
                    <div className="d-flex">
                    {/* <img
                        alt=""
                        src="https://react-bootstrap.github.io/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> */}
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
