import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

const Root = () => {
  return (
    <Router basename={"/"}>
      <App />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
