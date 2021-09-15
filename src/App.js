import React from "react";
import "./App.css";
import Dashboard from "./Views/Dashboard/Dashboard";
import LandingPage from "./Views/LandingPage/LandingPage";
import Login from "./Views/Login/Login";
import Signup from "./Views/Signup/Signup";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Redirect from="*" to="/" />
        </Switch>
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Dashboard /> */}
        {/* <LandingPage /> */}
      </div>
    </Router>
  );
}

export default App;
