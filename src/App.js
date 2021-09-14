import React, { useContext, useEffect, useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <main id="main">
        <section id="hero" className="d-flex align-items-center"></section>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          
        </Switch>
      </main>
  );
}

export default App;
