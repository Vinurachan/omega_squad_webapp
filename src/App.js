import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./shared/Footer";
import HomePage from "./home/HomePage";
import Login from "./auth/Login";
import NavBar from "./shared/NavBar";
import StudentView from "./student/StudentView";
import Timetable from "./dashboard/Timetable";
import "./App.css";

const App = () => {
  return (
    <>
      <main id="main">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/studentView">
            <StudentView />
          </Route>
          <Route exact path="/timetable">
            <Timetable />
          </Route>
        </Switch>
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default App;
