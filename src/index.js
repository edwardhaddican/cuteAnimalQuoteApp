import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";
import "./styles/main.css";

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("app")
);

if (!navigator.serviceWorker.controller) {
  navigator.serviceWorker.register("/sw.js").then(function (reg) {
    console.log(
      "Service worker has been registered for scope: " + reg.scope
    );
  });
}
