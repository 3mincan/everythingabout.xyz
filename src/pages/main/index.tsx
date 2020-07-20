import React, { FC, useCallback, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { Nav } from "../nav"
import { Loader } from '../loader/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import baseURL from "../../api";
import { Link } from "react-router-dom";
import './style.scss';
import NumberFormat from 'react-number-format';

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
            const { data } = await Axios.get(baseURL + "all?fields=flag;name;capital;callingCodes;alpha2Code;population;area;alpha3Code");
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
            {isLoading ? <Loader /> :
            <>
                <iframe width="100%" height="150%" src={`https://maps.google.com/maps?z=3&t=m&output=embed`} />
                <Nav></Nav>
                <Container>
                    <div role="grid" className="table">
                        <div role="row" className="table-row head bg-dark">
                            <div role="gridcell" className="cell">
                            </div>
                            <div role="gridcell" className="cell">
                                Name
                            </div>
                            <div role="gridcell" className="cell">
                                Capital
                            </div>
                            <div role="gridcell" className="cell">
                                Country Code
                            </div>
                            <div role="gridcell" className="cell">
                                ISO Code
                            </div>
                            <div role="gridcell" className="cell">
                                Population
                            </div>
                            <div role="gridcell" className="cell">
                                Area (km&sup2;)
                            </div>
                        </div>
                        {!isLoading && !error &&
                            countries.map((country, index) => (

                                <Link role="row" className="table-row" to={(`${country.alpha3Code}`).toLowerCase()} key={index}>
                                    <div role="gridcell" className="cell">
                                        <img src={country.flag} alt={`${country.name} flag`} className="flag" />
                                    </div>
                                    <div role="gridcell" className="cell">
                                        {country.name}
                                    </div>
                                    <div role="gridcell" className="cell" title={`${country.name} capital`}>
                                        {country.capital}
                                    </div>
                                    <div role="gridcell" className="cell">
                                        {country.callingCodes}
                                    </div>
                                    <div role="gridcell" className="cell">
                                        {country.alpha2Code}
                                    </div>
                                    <div role="gridcell" className="cell" title={`${country.name} population`}>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            value={country.population}
                                            displayType={'text'}
                                        />
                                    </div>
                                    <div role="gridcell" className="cell" title={`Area of ${country.name}`}>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            value={country.area}
                                            displayType={'text'}
                                        />
                                    </div>
                                </Link>
                            ))}
                    </div>
                </Container>
                </>
            }
        </>
    );
};
