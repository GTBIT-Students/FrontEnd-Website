import React, { Component } from "react";
import "./assets/css/default.css";
import UpperNoticeBar from "./components/UpperNoticeBar/UpperNoticeBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./pages/HomePage/home";
import Error404Page from "./pages/Error404Page/Error404Page";
import Footer from "./components/footer/footer";
import { Switch, Route } from "react-router-dom";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/">
          <UpperNoticeBar />
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/error-404" component={Error404Page} />
          <Footer />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
