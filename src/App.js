import React from "react";
import { Switch, Route } from "react-router-dom";

import "./index.scss";

import Portfolio from "./components/Portfolio";
import error404 from "./components/error404";

const App = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={Portfolio} />
      <Route path={`/404`} component={error404} />
    </Switch>
  );
};

export default App;
