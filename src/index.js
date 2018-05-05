import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const siteBase = "/";

ReactDOM.render(
  <Router basename={siteBase}>
    <App />
  </Router>,
  rootElement
);

registerServiceWorker();
