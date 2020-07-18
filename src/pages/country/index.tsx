import React, { FC, useCallback, useState, useEffect } from "react";
import Axios from "axios";
import baseURL from "../../api";
import { Loader } from "../loader/Loader";
import { useParams, Switch, Route } from "react-router-dom";
import { Nav } from "../nav";
import { Row, Col } from "react-bootstrap";

type State = {
    name?: string,
    isLoading?: boolean,
    error?: boolean,
    data?: Data[],
};

type UrlParamsType = {
    name: string;
};

type Data = {
    name: string,
    topLevelDomain: Array<string>,
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: Array<string>,
    capital: string,
    altSpellings: Array<string>,
    region: string,
    subregion: string,
    population: number,
    latlng: Array<number>,
    demonym: string,
    area: number,
    gini: number,
    timezones: Array<string>,
    borders: Array<string>,
    nativeName: string,
    numericCode: string,
    currencies: Array<object>,
    languages: Array<object>,
    translations: object,
    flag: string,
    regionalBlocs: Array<object>,
    cioc: string,
};

export const Country: FC<State> = () => {

    const [{ data, isLoading }, setState] = useState<State>({
        data: [],
        isLoading: false,
    });

    const urlParams = useParams<UrlParamsType>();

    const fetchCountry = useCallback(async () => {

        setState((state) => ({ ...state, isLoading: true }));
        try {
            const { data } = await Axios.get(baseURL + 'alpha/' + `${urlParams.name}`);
            console.log(data);
            const selectedData = [data];
            console.log(selectedData);


            setState((state) => ({
                ...state,
                data: [data],
                isLoading: false,
                error: false,
            }));
            console.log(data);
        } catch (err) {
            setState((state) => ({
                ...state,
                isLoading: false,
                error: true,
            }));
            throw err;
        }
    }, [name]);

    useEffect(() => {
        fetchCountry();
    }, [fetchCountry]);

    return (
        <>
            {isLoading ? <Loader /> :
            <>
                    {data &&
                        data.map((country, index) => (
                            <>
                            <Nav name={country.name} />
                            <Col lg={12}>
                            <Row>
                            <Col lg={6}><div></div></Col>
                                <Col lg={6}><div className="pl-0 card-body-title">
                                    <h3>{country.name}</h3>
                                </div></Col>
                                </Row>
                                </Col>
                            </>
)
                    )}
            </>
            }
        </>
    );
};
