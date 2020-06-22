import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
// import "./style.scss";

type Props = {
    name: string,
};

export const Country: FC<Props> = ({
    name,
}) => {
    return (
        <>
            {/* {titleCol && (
                <Row>
                    <Col lg={titleCol} className="pl-0 card-body-title">
                        <h3>{title}</h3>
                    </Col>
                    <Col lg={descCol} className="pr-0 card-body-desc">
                        {description}
                    </Col>
                </Row>
            )} */}
            {/* {!titleCol && ( */}
                <div className="d-flex flex-row">
                    <div className="pl-0 card-body-title">
                        <h3>{name}</h3>
                    </div>

                    <p className="pr-0 card-body-desc">text</p>
                </div>
            {/* )} */}
        </>
    );
};
