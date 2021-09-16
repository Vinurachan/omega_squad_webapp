import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./shared/NavBar";
import HomePage from "./home/HomePage";
import "./App.css";

const App = () => {
  return (
    <main id="main">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
