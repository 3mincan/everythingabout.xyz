import React, { FC } from "react"
import { Router, RouteComponentProps, Link } from "@reach/router"
import slugify from '@sindresorhus/slugify';

import { Main } from "./pages/main/Main";
import { Country } from "./pages/country/Country";

let Home = (props: RouteComponentProps) => <Main />
let CountryPage = (props: RouteComponentProps) => <Country name={name} />
let Dash = (props: RouteComponentProps) => <div>Dash</div>
const NotFound = () => <p>Sorry, nothing here</p>

interface InvoiceProps extends RouteComponentProps {
  invoiceId?: string;
}

const Invoice = (props: InvoiceProps) => (
  <div>
    <h1>Invoice {props.invoiceId}</h1>
  </div>
)

export const App: FC = () => {
  return (
    <Router>
      <Home path="/" />
      <CountryPage path="country/:name" />
      <Dash path="dashboard" />
      <Invoice path="invoice/:invoiceId" />
    </Router>
  )

}

