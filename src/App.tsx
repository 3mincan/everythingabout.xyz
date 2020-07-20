import React, { FC } from "react"


import { Main } from "./pages/main/";
import { Country } from "./pages/country/";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface Props {
  default: boolean
}

let Home = () => <Main />
let CountryPage = () => <Country />
const PageNotFound = (props: Props) => {
  return <div>Page not found</div>;
}

export const App: FC = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        <Route path="/:name">
          <Country />
        </Route>
        </Switch>
    </Router>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
