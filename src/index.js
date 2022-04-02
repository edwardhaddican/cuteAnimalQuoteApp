import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";
import "./styles/main.css";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("app")
);

// serviceWorker.register();
