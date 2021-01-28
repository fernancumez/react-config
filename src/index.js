import React from "react";
import { render } from "react-dom";
import App from "./app";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("root");
render(<App />, container);
