import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import LandingPage from "views/LandingPage";

import "styles/index.scss";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
