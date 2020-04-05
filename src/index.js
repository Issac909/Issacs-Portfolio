// React Required
import React from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const Root = () => {
  return (
    <Router basename={"/"}>
      <App />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
