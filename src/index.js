import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "./styles.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <Home path="/" />
    <Events path="/events" />
    <Shop path="/shop" />
    <About path="/about" />
    <Contact path="/contact" />
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
