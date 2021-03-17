import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "../globalStyles";
import Home from "./Home";
import reducers from "../reducers/index";

const ROUTES = {
  home: "/",
};

const initialState = {
  selectedCollection: "cryptopunks",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default function Pages() {
  return (
    <Router>
      <GlobalStyle />
      <GlobalProvider>
        <Route path={ROUTES.home} component={Home} />
      </GlobalProvider>
    </Router>
  );
}
