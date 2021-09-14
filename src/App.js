import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <main id="main">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
