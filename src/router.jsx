import React, { Component } from "react";
import "./assets/css/default.css";
import Home from "./pages/HomePage/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpperNoticeBar from "./components/UpperNoticeBar/UpperNoticeBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Carousel from "./components/Carousels/carousel";

import Footer from "./components/footer/footer";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <UpperNoticeBar />
        <NavigationBar />
        <Carousel />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
