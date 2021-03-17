import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "../globalStyles";
import Home from "./Home";

const ROUTES = {
  home: "/",
};

export default function Pages() {
  return (
    <Router>
      <GlobalStyle />
      <Route path={ROUTES.home} component={Home} />
    </Router>
  );
}
