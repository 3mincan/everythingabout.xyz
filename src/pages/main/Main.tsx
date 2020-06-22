import React, { FC, useCallback, useState, useEffect } from "react";
import { Nav, Row, Col, Table, Container } from "react-bootstrap";
import Axios from "axios";
import { Link } from '@reach/router'
import slugify from '@sindresorhus/slugify';
import { Loader } from '../loader/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';

type UrlParams = {
    id?: string;
};

type Country = {
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

type State = {
    countries: Country[];
    isLoading: boolean;
    error: boolean;
};

const baseURL = "https://restcountries.eu/rest/v2/";

export const Main: FC = () => {
    const [
        {
            countries,
            isLoading,
            error,
        },
        setState,
    ] = useState<State>({
        countries: [],
        isLoading: false,
        error: false,
    });

    const fetchCountries = useCallback(async () => {
        setState((state) => ({ ...state, isLoading: true }));
        try {
            const { data } = await Axios.get(baseURL + "all");
            setState((state) => ({
                ...state,
                countries: data,
                isLoading: false,
                error: false
            }));
        } catch (err) {
            setState((state) => ({
                ...state,
                isLoading: false,
                error: true,
            }));
            throw err;
        }
    }, []);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    console.log(countries)

    return (
        <>
        {isLoading && <Loader />}
        <Container>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country Code</th>
                        <th>ISO Codes</th>
                        <th>Population</th>
                        <th>Area (km&sup2;)</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && !error &&
                        countries.map((country, index) => (
                            <tr key={index}>
                                <td key={country.name}><Link to={slugify(`${country.name}`)}>{country.name}</Link></td>
                                <td key={country.callingCodes[0]}>{country.callingCodes[0]}</td>
                                <td key={country.alpha2Code}>{country.alpha2Code}</td>
                                <td key={country.population}>{country.population}</td>
                                <td key={country.area}>{country.area}</td>
                            </tr>
                        ))
                    }
                </tbody>
                {error && <div>Error message</div>}
            </Table>
        </Container>
        </>
    );
};
