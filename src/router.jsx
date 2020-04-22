import React, { Component } from "react";
import "./assets/css/default.css";
import Home from "./pages/HomePage/home";
import { Switch, Route } from "react-router-dom";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default Routes;
