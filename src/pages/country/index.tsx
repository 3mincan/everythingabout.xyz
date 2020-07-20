import React, { FC, useCallback, useState, useEffect } from "react";
import Axios from "axios";
import baseURL from "../../api";
import { Loader } from "../loader/Loader";
import { useParams } from "react-router-dom";
import { Nav } from "../nav";
import { Container, Col, Row, Card } from "react-bootstrap";
import './style.scss';

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
    borders: BordersType,
    nativeName: string,
    numericCode: string,
    currencies: CurrencyType,
    languages: Array<object>,
    translations: Translations,
    flag: string,
    regionalBlocs: Array<object>,
    cioc: string,
    currentCurreny: string,
};

type Currency = {
    code: string,
    name: string,
    symbol: string,
}

type CurrencyType = {
    [key: string]: Currency;
}

type BordersType = {
    [key: string]: string;
}

type Translations = {
    br: string,
    de: string,
    es: string,
    fr: string,
    ja: string,
    it: string,
    fa: string,
    pt: string,
    nl: string,
}

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
            setState((state) => ({
                ...state,
                data: [data],
                isLoading: false,
                error: false,
            }));
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
                                <Nav name={country.name} key={index+'nav'} />
                                <Container className="d-flex" key={index}>
                                    <Col lg={6}>
                                        <img className="country-flag" src={country.flag} />
                                        <iframe className="country-map" src={`https://maps.google.com/maps?q=${country.name}&z=5&t=m&output=embed`} />
                                    </Col>
                                    <Col lg={6}>
                                        <Row className="w-100 d-flex">
                                            <Col lg={6} className="my-3">
                                                <h1 className="text-center">{country.name}</h1>
                                            </Col>
                                            <Col lg={6} className="my-3">
                                                <h1 className="text-center">{country.nativeName}</h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <p>This country also called as {' '}
                                                <span title='German'>{country.translations.de} in German, </span>
                                                <span title='Spanish'>{country.translations.es} in Spanish, </span>
                                                <span title='French'>{country.translations.fr} in French, </span>
                                                <span title='Japanese'>{country.translations.ja} in Japanese, </span>
                                                <span title='Italian'>{country.translations.it} in Italian, </span>
                                                <span title='Persian'>{country.translations.fa} in Persian, </span>
                                                <span title='Portuguese'>{country.translations.pt} in Portuguese, </span>
                                                <span title='Dutch'>{country.translations.nl} in Dutch.</span>
                                            </p>
                                        </Row>
                                        <hr />
                                        <Row className="w-100">
                                            <div className="card-columns">
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                        <h2 className="text-center">{country.capital}</h2>
                                                        <h6 className="text-center">Capital</h6>
                                                </Card>
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                    <h2 className="text-center">{country.subregion}</h2>
                                                    <h6 className="text-center">Subregion</h6>
                                                </Card>
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                        <h2 className="text-center">{country.region}</h2>
                                                        <h6 className="text-center">Region</h6>
                                                </Card>
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                    <h2 className="card-title text-center">{country.callingCodes}</h2>
                                                    <h6 className="text-center">Calling Codes</h6>
                                                </Card>
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                    <h2 className="card-title text-center">{country.alpha2Code}</h2>
                                                    <h6 className="text-center">Alpha 2 Code</h6>
                                                </Card>
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                    <h2 className="card-title text-center">{country.alpha3Code}</h2>
                                                    <h6 className="text-center">Alpha 3 Code</h6>
                                                </Card>
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                    <h2 className="card-title text-center">{country.topLevelDomain}</h2>
                                                    <h6 className="text-center">Top Level Domain</h6>
                                                </Card>
                                                <Card className="p-3 bg-dark text-white m-1 align-items-center justify-content-between">
                                                    <h2 className="card-title text-center">{country.currencies[0].name}</h2>
                                                    <h6 className="text-center">Currency</h6>
                                                </Card>
                                            </div>
                                        </Row>
                                    </Col>
                                </Container>
                            </>
                        ))}
                </>
            }
        </>
    );
};