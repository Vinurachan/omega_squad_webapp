import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import {db} from "./firebase/firebase";

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
